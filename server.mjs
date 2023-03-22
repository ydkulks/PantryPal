/* add "type":"module" in package.json (require)
 * or rename server.js to server.mjs (import)
 */
import express from 'express';
const app = express();
const port = 5000;
import fetch from 'node-fetch';

// NEDB Database
import Datastore from 'nedb';
const db = new Datastore({filename:'./database/contactForm.db',autoload:true});

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
const apiKey = process.env.API_KEY;
const search = async () => {
  const params = `?apiKey=${apiKey}&query=burger`;
  const url = `https://api.spoonacular.com/recipes/complexSearch${params}`;
  const request = await fetch(url);
  const data = await request.json();
  console.log(data);
};
//search();

// Endpoint for Contact form
app.post('/api/contact', (req, res) => {
  //console.log(req.body);
  db.insert(req.body,(err,newDocs)=>{});
  res.send({status: 200});
});
