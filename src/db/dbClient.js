const AWS = require('aws-sdk');

const region = "us-east-2";
const accessKeyId = 'AKIAR3SO6FQOUBMCWAV7';
const secretAccessKey = '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';
//var tableName = "videos";

const dynamoDB = new AWS.DynamoDB({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
});

module.exports = dynamoDB;