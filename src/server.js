const express = require('express');
const app = express();
let port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`

const bodyParser = require('body-parser');
const VideoRepository = require("./db/repositories/videos");
const YouTubeUrlHelper = require("./helpers/youTubeUrlHelper")
const YouTubeApi = require("./services/youtubeApi")
const YouTubeData = require("./helpers/youTubeData")

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({"message": "Youtube Videos Api"});
});

app.get('/show', async (req, res) => {
    let videoRepository = new VideoRepository();
    let data = await videoRepository.getAll();

    res.send({"data": data.Items})
});

app.post('/add/video', async (req, res) => {
    let youtubeUrl = new YouTubeUrlHelper(req.body.video_link);

    if (! youtubeUrl.isValidLink()) {
        res.send({"message": "Invalid Video Link"})
    }

    let responseData = await new YouTubeApi().makeRequest('/videos?id=' + youtubeUrl.getUrlId())
    responseData.video_link = req.body.video_link;
    let youtubeData = new YouTubeData(responseData).getData()
    let videoRepository = new VideoRepository();
    let insertedData = videoRepository.add(youtubeData);

    res.send({"message": "Video added", "data": insertedData.params.Item})
});

module.exports = app;