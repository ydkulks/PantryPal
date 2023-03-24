/* add "type":"module" in package.json (require)
 * or rename server.js to server.mjs (import)
 */
import express from 'express';
const app = express();
const port = 5000;
//import fetch from 'node-fetch';
import bcrypt from 'bcrypt';
// NEDB Database
import Datastore from 'nedb';
const cf = new Datastore({
  filename: './database/contactForm.db',
  autoload: true,
});
const su = new Datastore({filename: './database/signUp.db', autoload: true});
//For accessing API_KEY from .files
import dotenv from 'dotenv';
dotenv.config();
//For allowing cross origin API calls
import cors from 'cors';
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

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

app.post('/api/login', (req, res) => {
  su.find({name: req.body.name}, async (err, doc) => {
    if (doc.length === 0) {
      res.send({status: 404, login: 'Not Found'});
    } else {
      const DCrypt = await bcrypt.compare(req.body.password, doc[0].password);
      if (DCrypt === true) {
        res.send({status: 200, login: 'Ok'});
      } else {
        res.send({status: 401, login: 'Unauthorized'});
      }
    }
  });
});
