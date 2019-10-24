
require('dotenv').config()
const url = process.env.MONGODB_ENDPOINT;
const dbName = process.env.MONGODB_DATABASE;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const port = process.env.MONGODB_PORT;

const setsData = require("../data/setsData");

const MongoClient = require('mongodb').MongoClient;

let conStr = `mongodb://${username}:${password}@${url}:${port}/${dbName}`

const uploadSets = () => {
    MongoClient.connect(conStr, function(err, client) {
        if (err) {console.log(err)};
    
        setsData.forEach(set => {
            client.db(dbName).collection('fullStackSets').insertOne(set);
        })
    });
}