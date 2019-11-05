const express = require("express");
const cors = require('cors');

const SERVER = require("./env");

const faqsHandler = require("./handlers/faqsHandler");
const tagsHandler = require("./handlers/tagsHandler");
const typesHandler = require("./handlers/typesHandler");
const setsHandler = require("./handlers/setsHandler");

// To test with real data include the follow data sets
const faqsData = require("./data/faqsData");
const tagsData = require("./data/tagsData");
const typesData = require("./data/typesData");
const setsData = require("./data/setsData");

// To test with mock data include the follow data sets
// const faqsData = require("./tests/data/faqsTestData");
// const tagsData = require("./tests/data/tagsTestData");
// const typesData = require("./tests/data/typesTestData");
// const setsData = require("./tests/data/setsTestData");

const allData = {
    faqsData: faqsData,
    tagsData: tagsData,
    typesData: typesData,
    setsData: setsData
}
const app = express();

app.use(cors())

// FaqsHandler.js

app.get(["/", "/about", "/info"], (req, res) => res.json(faqsHandler.getAbout(allData)));

app.get(["/rand/:arg", "/rand"], (req, res) => res.json(faqsHandler.getRandFaq({ arg: req.params.arg, faqsData: faqsData })));

app.get("/faq/:arg", (req, res) => res.json(faqsHandler.getNamedFaq({ arg: req.params.arg.toLowerCase(), faqsData: faqsData })));

// TagsHandler.js

app.get("/tags", (req, res) => res.json(tagsHandler.getTagsList({faqsData: faqsData, tagsData: tagsData })));

app.get("/tag/:arg", (req, res) => res.json(tagsHandler.getNamedTag({ arg: req.params.arg.toLowerCase(), faqsData: faqsData, tagsData: tagsData })));

// TypesHandler.js

app.get("/types", (req, res) => res.json(typesHandler.getTypesList({ faqsData: faqsData, typesData: typesData })));

app.get("/type/:arg", (req, res) => res.json(typesHandler.getNamedType({ arg: req.params.arg.toLowerCase(), faqsData: faqsData, typesData: typesData })));

// SetsHandler.js

app.get("/sets", (req, res) => res.json(setsHandler.getSetsList({ setsData: setsData })));

app.get("/set/:arg", (req, res) => res.json(setsHandler.getNamedSet({ arg: req.params.arg.toLowerCase(), setsData: setsData, faqsData: faqsData })));

app.listen(SERVER.PORT, () => console.log(`full-stack-faqs-back-end running on ${SERVER.PORT}!`));
