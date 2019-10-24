
require('dotenv').config()
const url = process.env.MONGODB_ENDPOINT;
const dbName = process.env.MONGODB_DATABASE;
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const port = process.env.MONGODB_PORT;

const faqsData = require("./src/data/faqsData");

const MongoClient = require('mongodb').MongoClient;


const uploadFaqs = () => {
    MongoClient.connect(`mongodb://${username}:${password}@${url}:${port}/${dbName}`, function(err, client) {
        if (err) {console.log(err)};
    
        faqsData.forEach(faq => {
            client.db(dbName).collection('fullStackFaqs').insertOne(faq);
        })
    });
}

const downloadFaqs = () => {
    MongoClient.connect(`mongodb://${username}:${password}@${url}:${port}/${dbName}`, function(err, client) {
        if (err) {console.log(err)};
    
        
    });
}
