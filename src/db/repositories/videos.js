//import {ddbDocClient} from "../dbdocclient";
const dynamoDB = require("../dbClient");
const uuid = require("uuid");

class VideoRepository {
    TABLE_NAME = 'videos';

    constructor() {
        console.log("VideoRepository Init ...")
    }

    add(data) {
        const params = {
            Item: {
                id: {
                    S: uuid.v4()
                },
                video_link: {
                    S:  data.video_link
                },
                video_id: {
                    S:  data.video_id
                },
                title: {
                    S:  data.title
                },
                description: {
                    S:  data.description
                },
                thumbnail: {
                    S:  data.thumbnail
                },
                created_at: {
                    N:  Date.now().toString()
                },
            },
            TableName: this.TABLE_NAME,
        };

        return dynamoDB.putItem(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                return false;
            } else {
                return data;
            }
        });
    }

    getAll() {
        //
    }
}

module.exports = VideoRepository;