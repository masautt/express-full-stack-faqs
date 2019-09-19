const express = require("express");
const cors = require('cors')
const app = express();

const faqsData = require("./data/faqs");
const tagsData = require("./data/tags");
const typesData = require("./data/types");
const setsData = require("./data/sets");

const PORT = 8080;
const URL = "http://localhost:8080";

app.use(cors())

app.get("/", (req, res) => {
  return res.json({
    total: faqsData.length,
    unanswered: faqsData.filter(faq => faq.answer === "").length,
    data: {
      types: {
        about: {
          api: `${URL}/types`,
          total: typesData.length,
        },
        data: typesData.map(type => {
          type["total"] = faqsData.filter(faq => faq.type === type.id).length;
          return type;
        }),
      },
      tags: {
        about: {
          api: `${URL}/tags`,
          total: tagsData.length,
        },
        data: tagsData.map(tag => {
          tag["total"] = faqsData.filter(faq => faq.tags.includes(tag.id)).length;
          return tag;
        }),
      },
      sets: {
        about: {
          api: `${URL}/sets`,
          total: setsData.length,
        },
        data: setsData,
      }
    }
  });
});

app.get(["/rand/:arg", "/rand/", "/rand"], (req, res) => {
  let arg = req.params.arg;
  return (arg > 50 || arg <= 0 || arg === undefined) 
    ? res.json(faqsData.sort(() => Math.random() - 0.5).slice(0, 1))
    : res.json(faqsData.sort(() => Math.random() - 0.5).slice(0, arg))
});

app.get(["/faq/:arg", "/faq/", "/faq"], (req, res) => {
  let arg = req.params.arg;
  return (arg.split("").length == 7) 
    ? res.json(faqsData.filter(faq => faq.id === arg.toLowerCase())) 
    : res.json(faqsData.filter(faq => faq.number == arg))
})

app.get("/tags", (req, res) => {
  return res.json(tagsData.map(tagData => {
    tagData["total"] = faqsData.filter(faqData => faqData.tags.includes(tagData.name)).length
    return tagData;
  }));
});

app.get("/tag/:arg", (req, res) => {
  let arg = req.params.arg;
  return res.json(faqsData.filter(faq => faq.tags.includes(arg.toLowerCase())));
});

app.get("/types", (req, res) => {
  return res.json(typesData);
});

app.get("/type/:arg", (req, res) => {
  let arg = req.params.arg;
  return res.json(typesData.filter(type => type.name.toLowerCase() === arg.toLowerCase()));
});

app.get("/sets", (req, res) => {
  return res.json(setsData);
});

app.get("/set/:arg", (req, res) => {
  let arg = req.params.arg;
  let rawSet = setsData.filter(set => set.id == arg);
  return res.json(rawSet);
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
