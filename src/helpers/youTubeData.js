
class YouTubeData {
    data = {
        'video_link': '',
        'video_id': '',
        'title': '',
        'description': '',
        'thumbnail': '',
    };

    constructor(data) {
        this.__setData(data)
    }

    __setData(data) {
        this.data.video_link = data.video_link;
        this.data.video_id = data.items[0].id;
        this.data.title = data.items[0].snippet.title;
        this.data.description = data.items[0].snippet.description;
        this.data.thumbnail = data.items[0].snippet.thumbnails.medium.url;
    }

    getData() {
        return this.data;
    }
}

module.exports = YouTubeData;