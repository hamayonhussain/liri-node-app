require("dotenv").config();

var keys = require("./keys")

var Spotify = require("node-spotify-api");

//how to capture arguments from command line?
// argv[0] and [1] are node.js and filename.js
// how to capture [2] and [3]

var newSearch = process.argv[2];
var newSearchTerm = process.argv[3];

var spotify = new Spotify(keys.spotify);

//control flow logic for search
//if (newSearch === ???)

//Artist(s)

//The song's name

//A preview link of the song from Spotify

//The album that the song is from

if (newSearch === 'spotify-this-song') {
    
    spotify.search({ type: 'track', query: newSearchTerm }, function(err, data) {
        
        if (err) {
          return console.log('Error occurred: ' + err);
        }

        var songs = data.tracks.items;

        for ( var i = 0; i < songs.length; i++) {
            console.log('Song name:', songs[i].name); 
            console.log("Album Name:", songs[i].album.name);
            console.log("Artist Name", songs[i].artist);
        }
       
      //console.log(JSON.stringify(data, null, 2)); 
      });
}

