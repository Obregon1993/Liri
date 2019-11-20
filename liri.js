require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

if (process.argv[2]===`concert-this`) {

    var artist=process.argv[3];
    var url="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    
}else if (process.argv[2]===`spotify-this-song`) {
    
}else if (process.argv[2]===`movie-this`) {
    
}else if (process.argv[2]===`do-what-it-says`) {
    
}