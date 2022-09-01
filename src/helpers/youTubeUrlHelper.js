
class YouTubeUrlHelper {
    constructor(youtubeUrl) {
        this.__setYoutubeUrl(youtubeUrl);
    }

    __setYoutubeUrl(youtubeUrl) {
        this.youtubeUrl = (youtubeUrl.match('[\\?&]v=([^&#]*)')) ? youtubeUrl : null;
    }

    getUrl() {
        return this.youtubeUrl;
    }

    getUrlId() {
        let tempUrl = this.youtubeUrl.split('=');

        return tempUrl[1];
    }

    isValidLink() {
        return (this.youtubeUrl)
    }
}

module.exports = YouTubeUrlHelper;