#LIRI - Language Interpretation and Recognition Interface

## Overview
LIRI is like SIRI (from iOS).  It is a command line node app that takes in parameters and outputs data.

## Setup
#### 0. Clone the repo

#### 1. Run npm install, and the following packages should be installed:

* [twitter](https://www.npmjs.com/package/twitter)
* [spotify](https://www.npmjs.com/package/node-spotify-api)
* [request](https://www.npmjs.com/package/request)
	* The request npm package will be used to hit the OMDB API
		* [OMDB API](http://www.omdbapi.com)

#### 2. Get your Twitter & Spotify API credentials by following these steps (must have a Twitter & Spotify accounts and be logged in):

#### Twitter

* Step One: Go to https://apps.twitter.com/app/new and fill out and submit the form
* Step Two: Go to Keys and Access Tokens to get your Consumer Key and Consumer Secret
* Step Three: Then click the button below on that page to create an Access Token and Access Token Secret

#### Spotify

* Step One: Go to https://developer.spotify.com/my-applications and fill out and submit the form
* Step Two: Get your Client ID
* Step Three: Then click the button below on that page to unhide Client Secret

#### 3. Create a file named keys.js and store it somewhere safe (you will need to reference it):

* Inside keys.js insert the following code:

``` JavaScript

module.exports = {
  twitterKeys: {
	consumer_key: 'your consumer_key',
	consumer_secret: 'your consumer_secret',
	access_token_key: 'your access_token_key',
	access_token_secret: 'your access_token_secret',
  },
  spotifyKeys: {
    id: 'your client_id',
    secret: 'your client_secret'
  }
}

```

## Run the application
* To install globally:
```
npm install -g
```
The syntax to run the program is:
```
node liri.js
```

Available functions:
* twitter

* spotify

* omdb

* random

Running the following commands in your terminal will do the following:
```
> tweets > username
```
* will log your last 20 tweets and when they were created

```
> spotify > 'song name'
```

* log the following information about the song:

	* artist(s)
	* song name
	* preview link of the song from spotify
	* album that the song is a part of
	* song name

* if no song is provided then the program will output information for the song 'Computer Love' by Zapp by default

```
> omdb > 'movie name'
```

* this would log the following information about the movie:

	* Title
	* Year
	* IMDB Rating
	* Country
	* Language
	* Plot
	* Actors
	* Rotten Tomatoes Rating
	* Rotten Tomatoes URL

* if no movie is provided then the program will output information for the movie 'WarGames' by default

```
> random
```

* The program will take the text inside of random.txt and use it to call the first command with the second part as it's parameter

* Currently in random.txt, the following text is there:

```
spotify, "Hey Jude"
```

* This would call the spotifyThis function and pass in 'Hey Jude' as the song.

* This should work for any function and parameter you use.

* All commands and output are logged in terminal.log.

## Built With

* Visual Studio Code - Text Editor
* Terminal/Git Bash

# Copyright
Paul Pinho © 2018. All Rights Reserved.
