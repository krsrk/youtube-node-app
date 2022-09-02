const AWS = require('aws-sdk');

const region = "us-east-2";
const accessKeyId = '';
const secretAccessKey = '';

const dynamoDB = new AWS.DynamoDB({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
});

module.exports = dynamoDB;