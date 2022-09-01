const express = require('express');
const app = express();
let port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`

const bodyParser = require('body-parser');
const VideoRepository = require("./db/repositories/videos");

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({"message": "Youtube Videos Api"});
});

app.get('/show', (req, res) => {
    res.send({"message": "list of videos"})
});

app.post('/add/video', (req, res) => {
    //Receive the video link

    //Get the video id from the link: process the link to find the video id.

    //Request the video info from Youtube API:https://www.googleapis.com/youtube/v3/videos?id=ID_DEL_VIDEO&key=API_KEY&part=snippet
    //Info to store: uuid, link, title(from  youtube api), description(from  youtube api), thumbnail(from  youtube api), creation date

    //Store the video in the dynamo db table
    const videoRepository = new VideoRepository();
    let data = videoRepository.add({
        'video_link': 'https://www.youtube.com/watch?v=GD8nCSr54PA',
        'video_id': 'GD8nCSr54PA',
        'title': 'Dragon Ball Super: SUPER HERO | OFFICIAL TRAILER 2',
        'description': 'Dragon Ball Super: SUPER HERO is NOW PLAYING to theaters around the world! More info here! http://2022dbs-global.com',
        'thumbnail': 'https://lh3.googleusercontent.com/4LpYfns0npTHhbyyT8UOci-_jMh3umLktzE7iHFnQKRpmvk93wcdSBvfR3I3o-IcNa2cltssYZe8mw',
    });
    res.send({"message": "Video added", "data": data})
});

module.exports = app;