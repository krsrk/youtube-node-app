require('dotenv').config()

const AWS = require('aws-sdk');

const region = "us-east-2";
const accessKeyId = process.env.AW_ACCESS;
const secretAccessKey = process.env.AW_SECRET;

const dynamoDB = new AWS.DynamoDB({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
});

module.exports = dynamoDB;