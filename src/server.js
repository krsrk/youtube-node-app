const express = require('express');
const app = express();
let port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`

const bodyParser = require('body-parser');

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

    res.send({"message": "Add a video"})
});

module.exports = app;