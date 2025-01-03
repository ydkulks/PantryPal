/* add "type":"module" in package.json (require)
 * or rename server.js to server.mjs (import)
 */
import express from 'express';
const app = express();
const port = 5000;
import fetch from 'node-fetch'; //Fetch
import Datastore from 'nedb'; //DB
const cf = new Datastore({
  filename: './database/contactForm.db',
  autoload: true,
});
const su = new Datastore({
  filename: './database/signUp.db',
  autoload: true,
});
const sl = new Datastore({
  filename: './database/shoppinglist.db',
  autoload: true,
});
import dotenv from 'dotenv'; //Env
dotenv.config();
import cors from 'cors'; //CORS
app.use(cors());
app.use(express.json());
import bcrypt from 'bcrypt'; //Encrypt
import jwt from 'jsonwebtoken'; //Auth

/******* End-point index *******/
// Contact form
// Sign-up
// Login
// Authorization
// Protected route
// Account deletion
// Dashboard
// Recipes API
// Instructions API
// Shopping List

// Contact form
app.post('/api/contact', (req, res) => {
  //console.log(req.body);
  cf.insert(req.body);
  res.send({status: 200, contactForm: 'Submitted'});
});

// Sign-up
app.post('/api/signup', async (req, res) => {
  const hashedPwd = await bcrypt.hash(req.body.password, 10);
  su.find({name: req.body.name, email: req.body.email}, (err, doc) => {
    // if not found, doc's value is []
    if (doc.length === 0) {
      const record = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPwd,
        role: "basic",
      };
      su.insert(record, (err, newDoc) => {});
      res.send({status: 201, signup: 'Created'});
    } else {
      res.send({status: 409, signup: 'Conflict'});
    }
  });
});

// Login
const ENV = process.env;
app.post('/api/login', (req, res) => {
  // Authentication
  su.find({name: req.body.name}, async (err, doc) => {
    if (doc.length === 0) {
      res.send({status: 404, login: 'Not Found'});
    } else {
      const Decrypt = await bcrypt.compare(req.body.password, doc[0].password);

      if (Decrypt === true) {
        // Authorization
        // Assigning token to user
        const accessToken = jwt.sign(doc[0].name, ENV.ACCESS_TOKEN_SECRET);
        res.send({
          status: 200,
          login: 'Ok',
          token: accessToken,
        });
      } else {
        res.send({status: 401, login: 'Unauthorized'});
      }
    }
  });
});

// Authorization
const Authorization = (req, res, next) => {
  const authHeader = req.headers['authorisation'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) {
    return res.send({status: 401});
  } else {
    jwt.verify(token, ENV.ACCESS_TOKEN_SECRET, (err, name) => {
      if (err) {
        console.log(err);
        return res.send({status: 401, error: 'Unauthorized'});
      } else {
        req.user = name;
        next();
      }
    });
  }
};

// Protected route
app.get('/api/protected', Authorization, (req, res) => {
  // Checking role of the user
  su.find({name: req.user}, (err, doc) => {
    if (err) console.log(err);
    if (doc.length === 0) return res.send({status: 401});
    if (doc[0].role === 'admin') {
      return res.send({status: 200, role: 'admin'});
    }
    if (doc[0].role === 'basic') {
      return res.send({status: 200, role: 'basic'});
    }
  });
});

// Account deletion
app.get('/api/deleteAccount', Authorization, (req, res) => {
  su.remove({name: req.user});
  return res.send({status: 200, message: 'account deleted'});
});

// Dashboard
app.get('/api/dashboard', Authorization, (req, res) => {
  su.find({name: req.user}, (err, doc) => {
    if (err) console.log(err);
    if (doc.length === 0) return res.status(401);
    if (doc[0].role === 'admin') {
      return res.status(200).send({
        name: doc[0].name,
        role: doc[0].role,
      });
    }
    if (doc[0].role === 'basic') {
      return res.status(200).send({name: doc[0].name});
    }
  });
});

// Recipes API
const apiKey = process.env.API_KEY;
app.post('/api/recipes', async (req, res) => {
  const query = req.body.query;
  const diet = req.body.diet;
  const cuisine = req.body.cuisine;
  const ing = req.body.ingredients;
  //const offset = req.body.offset;
  const params3 = `&includeIngredients=${ing}`;
  const params2 = `&diet=${diet}&cuisine=${cuisine}${params3}`;
  const params = `?apiKey=${apiKey}&query=${query}${params2}`;
  const url = `https://api.spoonacular.com/recipes/complexSearch${params}`;
  const request = await fetch(url);
  const data = await request.json();
  res.status(200).send(data);
});

// Instructions API
app.post('/api/instructions', async (req, res) => {
  const id = req.body.id;
  const params = `${id}/analyzedInstructions?apiKey=${apiKey}`;
  const url = `https://api.spoonacular.com/recipes/${params}`;
  const request = await fetch(url);
  const data = await request.json();
  res.status(200).send(data);
});

app.post('/api/shoppinglist', Authorization, (req, res) => {
  const NewData = {
    name: req.user,
    item: req.body.item,
    timestamp: req.body.timestamp,
  };
  // Insert new data into the database
  sl.insert(NewData);
  res.send({status: 200});
});

app.get('/api/shoppinglist', Authorization, (req, res) => {
  // Send user's list to the client
  sl.find({name: req.user}, (err, doc) => {
    if (err) return console.log(err);
    if (doc.length === 0) return res.send({status: 401});

    res.send({status: 200, data: doc});
  });
});

app.post('/api/listdelete', Authorization, (req, res) => {
  sl.remove({_id: req.body.id}, {}, (err, numRemoved) => {
    if (err) return res.send({status: 401});
    if (numRemoved === 0) return res.send({status: 404});
    res.send({status: 200, numRemoved: numRemoved});
  });
});

app.post('/api/listupdate', Authorization, (req, res) => {
  //console.log(`ID: ${req.body.id}`);
  sl.update(
    {_id: req.body.id},
    {name: req.user, item: req.body.item, timestamp: Date()},
    (err, numReplaced) => {
      if (err) return res.send({status: 401});
      if (numReplaced === 0) return res.send({status: 404});
      res.send({status: 200, numReplaced: numReplaced});
    },
  );
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
