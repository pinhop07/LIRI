var inquirer = require("inquirer");
var userInfo = require("./functions.js");


// Create a "Prompt" with a series of questions.
inquirer.prompt([
    // Checkbox
    {
        type: "list",
        message: "Choose action",
        choices: ["twitter", "spotify", "omdb", "random"],
        name: "action"
    }
])
// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
.then(function(inquirerResponse) {
    switch (inquirerResponse.action) {
        case 'twitter':
            inquirer.prompt([
                {                    
                    name: "username",
                    message: "Twitter Username: "
                }
            ]).then(function(twitterName) {
                userInfo.data.myTweets(twitterName.username);              
            });            
            break;
        case 'spotify':
            inquirer.prompt([
                {
                    name: "song",
                    message: "Song name: "
                }
            ]).then(function(musicValue) {
                userInfo.data.spotifyThis(musicValue.song);                
            });
            break;            
        case 'omdb':
            inquirer.prompt([
                {
                    name: "movie",
                    message: "Movie name: "
                }
            ]).then(function(movieValue) {
                userInfo.data.omdbThis(movieValue.movie);
            });
            break;       
        case 'random':
            userInfo.data.random();
            break;
    }
});

