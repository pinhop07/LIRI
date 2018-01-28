var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var request = require("request");
var keys = require("./keys.js");
var fs = require("fs");

var methods = {};

// my-tweets function
methods.myTweets = function(username) {
    
    var client = new Twitter(keys.twitterKeys);
    
    var params = {
        screen_name: username,
        count: 20
    }

    client.get("statuses/user_timeline", params, function(error, tweets, response) {
        if (!error && response.statusCode == 200) {

            var beginEntry = "=============== LOG ENTRY BEGIN ===============\r\n" + Date() + 
                             "\r\n \r\nTERMINAL COMMANDS:\r\n$: twitter\r\n \r\nDATA OUTPUT:\r\n"

            writeToLogTxt(beginEntry)
            
            console.log("");
            console.log("Last 20 Tweets:")

            for (i = 0; i < tweets.length; i++) {
                var number = i + 1;
                console.log("");
                console.log([i + 1] + ". " + tweets[i].text);
                console.log("Created on: " + tweets[i].created_at);
                console.log("");

                var output = number + ". Tweet: " + tweets[i].text + "\r\nCreated at: " + tweets[i].created_at + " \r\n" +
                             "=============== LOG ENTRY END ===============\r\n \r\n"

                writeToLogTxt(output)
            }
        }
    });
} // end myTweets function

// spotifyThis function
methods.spotifyThis = function(song) {
    
    var spotify = new Spotify(keys.spotifyKeys);

    spotify.search({type: "track", query: song}, function(err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        } else {

            var beginEntry = "=============== LOG ENTRY BEGIN ===============\r\n" + Date() + 
            "\r\n \r\nTERMINAL COMMANDS:\r\n$: spotify\r\n \r\nDATA OUTPUT:\r\n"

            writeToLogTxt(beginEntry)

            var songName = data.tracks.items[0].name;
            var preview = data.tracks.items[0].preview_url;
            var artist = data.tracks.items[0].artists[0].name;
            var album = data.tracks.items[0].album.name;

            console.log("")
            console.log("Artist: " + artist)
            console.log("Album: " + album)
            console.log("Song Name: " + songName)
            console.log("Preview Url: " + preview)

            var output = "\nSpotify Search: " + songName + ", " + artist + " \r\n" +
                         "=============== LOG ENTRY END ===============\r\n \r\n"

            writeToLogTxt(output)
        }
    });
} // end spotifyThis function

// omdbThis function
methods.omdbThis = function(movie) {

    var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    request(omdbURL, function (error, response, body){
        if(!error && response.statusCode == 200){

            var beginEntry = "=============== LOG ENTRY BEGIN ===============\r\n" + Date() + 
            "\r\n \r\nTERMINAL COMMANDS:\r\n$: omdb\r\n \r\nDATA OUTPUT:\r\n"

            writeToLogTxt(beginEntry)

            var body = JSON.parse(body);
            
            console.log("")
            console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
            console.log("Rotten Tomatoes URL: " + body.tomatoURL);
        
            //adds text to log.txt
            var output = "\nMovie Search: " + body.Title + " \r\n" +
                         "=============== LOG ENTRY END ===============\r\n \r\n"

            writeToLogTxt(output)
        
        } else {
            console.log('Error occurred.')
        }
    });
} //end omdbThis function

// random function
methods.random = function() {
    fs.readFile('random.txt', 'utf8', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            var dataArr = data.split(',');
            if (dataArr[0] === 'spotify') {
                methods.spotifyThis(dataArr[1]);
            }
            if (dataArr[0] === 'omdb') {
                methods.omdbThis(dataArr[1]);
            }
        }
    });
} // end doWhatItSays function

// log function
function writeToLogTxt(output) {
    fs.appendFile("log.txt", output, function(error){
        if(error) {
            console.log(error)
        }
    })
}

exports.data = methods;