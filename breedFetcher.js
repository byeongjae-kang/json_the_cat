const request = require('request');
// const Promise = require('promise');
const arg = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  if (error) {
    console.error(`it looks like your URL is broken`);
    process.exit();
  }
  if (!JSON.parse(body)[0]) {
    console.log(`There is no such breed: ${arg}`);
    process.exit();
  }
  const catDescription = JSON.parse(body)[0].description;
  console.log(catDescription);
});