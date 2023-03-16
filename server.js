// add "type":"module" in package.json
import express from 'express';
const app = express();
import fetch from 'node-fetch';
const port = 5000;
import dotenv from 'dotenv';
dotenv.config();

app.listen(port,()=>{
  console.log(`Listening to port ${port}`)
})

const apiKey = process.env.API_KEY;
console.log(apiKey);

async function search(){
  const params = `?apiKey=${apiKey}&query=burger`
  const url = `https://api.spoonacular.com/recipes/complexSearch${params}`
  const request = await fetch(url);
  const data = await request.json();
  console.log(data);
}

search();
