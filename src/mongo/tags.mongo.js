
require('dotenv').config()
const url = process.env.MONGODB_ENDPOINT;
const dbName = process.env.MONGODB_DATABASE;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const port = process.env.MONGODB_PORT;

const tagsData = require("../data/tagsData");

const MongoClient = require('mongodb').MongoClient;

const conStr = `mongodb://${username}:${password}@${url}:${port}/${dbName}`

const uploadTags = () => {
    MongoClient.connect(conStr, function(err, client) {
        if (err) {console.log(err)};
    
        tagsData.forEach(tag => {
            client.db(dbName).collection('fullStackTags').insertOne(tag);
        })
    });
}