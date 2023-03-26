/* add "type":"module" in package.json (require)
 * or rename server.js to server.mjs (import)
 */
import express from 'express';
const app = express();
const port = 5000;
//import fetch from 'node-fetch'; //Fetch
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

// Calling 'spoonacular' API
/*
const apiKey = process.env.API_KEY;
const search = async () => {
  const params = `?apiKey=${apiKey}&query=burger`;
  const url = `https://api.spoonacular.com/recipes/complexSearch${params}`;
  const request = await fetch(url);
  const data = await request.json();
  console.log(data);
};
search();
*/

// Endpoint for Contact form
app.post('/api/contact', (req, res) => {
  //console.log(req.body);
  cf.insert(req.body, (err, newDocs) => {});
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
    jwt.verify(token, ENV.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({error: 'Unauthorized'});
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};

app.get('/api/protected', Authorisation, (req, res) => {
  res.status(200);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
