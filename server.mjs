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
const su = new Datastore({filename: './database/signUp.db', autoload: true});
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
// Authorisation
// Protected route
// Account deletion
// Dashboard
// Recipes API
app.post('/api/contact', (req, res) => {
  //console.log(req.body);
  cf.insert(req.body);
  res.send({status: 200, contactForm: 'Submitted'});
});

app.post('/api/signup', async (req, res) => {
  const hashedPwd = await bcrypt.hash(req.body.password, 10);
  su.find({name: req.body.name, email: req.body.email}, (err, doc) => {
    // if not found, doc's value is []
    if (doc.length === 0) {
      const record = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPwd,
        role: basic,
      };
      su.insert(record, (err, newDoc) => {});
      res.send({status: 201, signup: 'Created'});
    } else {
      res.send({status: 409, signup: 'Conflict'});
    }
  });
});

const ENV = process.env;
app.post('/api/login', (req, res) => {
  // Authentication
  su.find({name: req.body.name}, async (err, doc) => {
    if (doc.length === 0) {
      res.send({status: 404, login: 'Not Found'});
    } else {
      const Decrypt = await bcrypt.compare(req.body.password, doc[0].password);

      if (Decrypt === true) {
        // Authorisation
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

const Authorisation = (req, res, next) => {
  const authHeader = req.headers['authorisation'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) {
    return res.send({status: 401});
  } else {
    jwt.verify(token, ENV.ACCESS_TOKEN_SECRET, (err, name) => {
      if (err) {
        return res.status(401).json({error: 'Unauthorized'});
      } else {
        req.user = name;
        next();
      }
    });
  }
};

app.get('/api/protected', Authorisation, (req, res) => {
  // Checking role of the user
  su.find({name: req.user}, (err, doc) => {
    if (err) console.log(err);
    if (doc.length === 0) return res.status(401);
    if (doc[0].role === 'admin') {
      return res.send({status: 200, role: 'admin'});
    }
    if (doc[0].role === 'basic') {
      return res.send({status: 200, role: 'basic'});
    }
  });
});

app.get('/api/deleteAccount', Authorisation, (req, res) => {
  su.remove({name: req.user});
  return res.send({status: 200, message: 'account deleted'});
});

app.get('/api/dashboard', Authorisation, (req, res) => {
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

// Calling 'spoonacular' API
const apiKey = process.env.API_KEY;
app.post('/api/recipes', async (req, res) => {
  const query = req.body.query;
  const params = `?apiKey=${apiKey}&query=${query}&number=1`;
  const url = `https://api.spoonacular.com/recipes/complexSearch${params}`;
  const request = await fetch(url);
  const data = await request.json();
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
