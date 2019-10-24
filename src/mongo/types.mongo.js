
require('dotenv').config()
const url = process.env.MONGODB_ENDPOINT;
const dbName = process.env.MONGODB_DATABASE;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const port = process.env.MONGODB_PORT;

const typesData = require("../data/typesData");

const MongoClient = require('mongodb').MongoClient;

const conStr = `mongodb://${username}:${password}@${url}:${port}/${dbName}`

const uploadTypes = () => {
    MongoClient.connect(conStr, function(err, client) {
        if (err) {console.log(err)};
    
        typesData.forEach(type => {
            client.db(dbName).collection('fullStackTypes').insertOne(type);
        })
    });
}