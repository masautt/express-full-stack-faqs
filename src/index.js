const express = require("express");
const cors = require('cors');

const SERVER = require("./env");

const faqsData = require("./data/faqsData");
const tagsData = require("./data/tagsData");
const typesData = require("./data/typesData");
const setsData = require("./data/setsData");

const faqsHelper = require("./helpers/faqsHelper");
const tagsHelper = require("./helpers/tagsHelper");
const typesHelper = require("./helpers/typesHelper");
const setsHelper = require("./helpers/setsHelper");

const allData = {
    faqsData: faqsData,
    tagsData: tagsData,
    typesData: typesData,
    setsData: setsData
}
const app = express();

app.use(cors())

app.get(["/", "/about", "/info"], (req, res) => res.json(faqsHelper.getAbout(allData)));

app.get("/rand/:arg", (req, res) => res.json(faqsHelper.getRandFaq({ arg: req.params.arg.toLowerCase(), faqsData: faqsData })));

app.get("/faq/:arg", (req, res) => res.json(faqsHelper.getNamedFaq({ arg: req.params.arg.toLowerCase(), faqsData: faqsData })));

app.get("/tags", (req, res) => res.json(tagsHelper.getTagsList({faqsData: faqsData, tagsData: tagsData })));

app.get("/tag/:arg", (req, res) => res.json(tagsHelper.getNamedTag({ arg: req.params.arg.toLowerCase(), faqsData: faqsData, tagsData: tagsData })));

app.get("/types", (req, res) => res.json(typesHelper.getTypesList({ faqsData: faqsData, typesData: typesData })));

app.get("/type/:arg", (req, res) => res.json(typesHelper.getNamedType({ arg: req.params.arg.toLowerCase(), faqsData: faqsData, typesData: typesData })));

app.get("/sets", (req, res) => res.json(setsHelper.getSetsList({ setsData: setsData })));

app.get("/set/:arg", (req, res) => res.json(setsHelper.getNamedSet({ arg: req.params.arg.toLowerCase(), setsData: setsData })));

app.listen(SERVER.PORT, () => console.log(`full-stack-faqs-back-end running on ${SERVER.PORT}!`));
