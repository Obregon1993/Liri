const dotenv=require("dotenv").config();

const axios = require("axios");

var moment = require('moment');

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

if (process.argv[2]===`concert-this`) {

    var artist=process.argv.slice(3).join(" ");
    var url="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    
    axios.get(url).then(
        function(response) {
          var date=moment(response.data[0].datetime).format("MM/DD/YYYY");
          console.log("Venue's Name: "+ response.data[0].venue.name);
          console.log("Venue's Location: " +response.data[0].venue.country+", "+response.data[0].venue.region+", "+response.data[0].venue.city);
          console.log( "Date of the event: "+date);
          
        })
        .catch(function(err) {
        if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(err.response.data);
            console.log("---------------Status---------------");
            console.log(err.response.status);
            console.log("---------------Status---------------");
            console.log(err.response.headers);
          } else if (err.request) {
            // The request was made but no response was received
            // `err.request` is an object that comes back with details pertaining to the err that occurred.
            console.log(err.request);
          } else {
            // Something happened in setting up the request that triggered an err
            console.log("err", err.message);
          }
          console.log(err.config);
        });
    
}else if (process.argv[2]===`spotify-this-song`) {
    
}else if (process.argv[2]===`movie-this`) {
  if (process.argv[3]==null) {
    const url = "https://www.omdbapi.com/?t=Mr. Nobody&y=&plot=short&apikey=trilogy";

    axios.get(url).then(
      function(response) {
      
        console.log(`Title of the movie: ${response.data.Title}`)
        console.log(`Year the movie came out: ${response.data.Year}`)
        console.log(`IMDB Rating of the movie: ${response.data.imdbRating}`)
        console.log(`Rotten Tomatoes Rating of the movie: ////////`)
        console.log(`Country where the movie was produced: ${response.data.Country}`)
        console.log(`Language of the movie: ${response.data.Language}`)
        console.log(`Plot of the movie: ${response.data.Plot}`)
        console.log(`Actors in the movie: ${response.data.Actors}`)
      })
      .catch(function(err) {
      if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(err.response.data);
          console.log("---------------Status---------------");
          console.log(err.response.status);
          console.log("---------------Status---------------");
          console.log(err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          // `err.request` is an object that comes back with details pertaining to the err that occurred.
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an err
          console.log("err", err.message);
        }
        console.log(err.config);
      });
  }else{
  const title = process.argv.slice(3).join(" ");
  const url = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

  axios.get(url).then(
    function(response) {
    
      console.log(`Title of the movie: ${response.data.Title}`)
      console.log(`Year the movie came out: ${response.data.Year}`)
      console.log(`IMDB Rating of the movie: ${response.data.imdbRating}`)
      console.log(`Rotten Tomatoes Rating of the movie: ////////`)
      console.log(`Country where the movie was produced: ${response.data.Country}`)
      console.log(`Language of the movie: ${response.data.Language}`)
      console.log(`Plot of the movie: ${response.data.Plot}`)
      console.log(`Actors in the movie: ${response.data.Actors}`)
    })
    .catch(function(err) {
    if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(err.response.data);
        console.log("---------------Status---------------");
        console.log(err.response.status);
        console.log("---------------Status---------------");
        console.log(err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        // `err.request` is an object that comes back with details pertaining to the err that occurred.
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an err
        console.log("err", err.message);
      }
      console.log(err.config);
    });
  }
    
}else if (process.argv[2]===`do-what-it-says`) {
    
}
