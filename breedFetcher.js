const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      process.exit();
    }
    if (!JSON.parse(body)[0]) {
      callback('There is no such cat breed', null);
      process.exit();
    }
    const catDescription = JSON.parse(body)[0].description;
    callback(null, catDescription);

  });
};

module.exports = { fetchBreedDescription };








