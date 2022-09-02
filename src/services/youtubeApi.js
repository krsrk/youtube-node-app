const axios = require("axios");

class YoutubeApi {
    API_KEY = '';
    BASE_URL = 'https://www.googleapis.com/youtube/v3';

    constructor() {
        console.log("YouTube Api Init ...")
    }

    async makeRequest(url) {
        const requestUrl = this.BASE_URL + url + '&key=' + this.API_KEY + '&part=snippet';
        let response = await axios.get(requestUrl);

        return response.data;
    }
}

module.exports = YoutubeApi;