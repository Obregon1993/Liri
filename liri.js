const dotenv=require("dotenv").config();

const axios = require("axios");

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

if (process.argv[2]===`concert-this`) {

    var artist=process.argv[3];
    var url="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
    axios.get(url).then(
        function(response) {
          console.log( response.data);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

    
}else if (process.argv[2]===`spotify-this-song`) {
    
}else if (process.argv[2]===`movie-this`) {
    
}else if (process.argv[2]===`do-what-it-says`) {
    
}