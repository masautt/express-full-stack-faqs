//Fullstack backend
const express = require("express");
const faqsData = require("./data/faqs");
const tagsData = require("./data/tags");
const typesData = require("./data/types");
const setsData = require("./data/sets");

const cors = require('cors')
const app = express();

app.use(cors())

// Just returns a general overview of what options are available
app.get("/about", (req, res) => {
  return res.json({
    total: faqsData.length,
    unanswered: faqsData.filter(faq => faq.answer === "").length,
    types: {
      api: "https://8snib.sse.codesandbox.io/types",
      total: typesData.length,
    },
    tags: {
      api: "https://8snib.sse.codesandbox.io/tags",
      total: tagsData.length,
    },
    sets: {
      api: "https://8snib.sse.codesandbox.io/sets",
      total: setsData.length,
    }
  });
});

// Returns about + data for each option in about
app.get("/data", (req, res) => {
  return res.json({
    total: faqsData.length,
    unanswered: faqsData.filter(faq => faq.answer === "").length,
    types: {
      about: {
        api: "https://8snib.sse.codesandbox.io/types",
        total: typesData.length,
      },
      data: typesData,
    },
    tags: {
      about: {
        api: "https://8snib.sse.codesandbox.io/tags",
        total: tagsData.length,
      },
      data: tagsData,
    },
    sets: {
      about: {
        api: "https://8snib.sse.codesandbox.io/sets",
        total: setsData.length,
      },
      data: setsData,
    }
  });
});

//Return a list of random faqs (mainly for the marquees on the frontend)
app.get(["/rand/:num", "/rand/", "/rand"], (req, res) => {
  //If the limit is greater than 20, less than zero or not given then just return 10
  let num = req.params.num;
  let limit = num > 50 || num <= 0 || num === undefined ? 1 : num;
  return (res.json(faqsData.sort(() => Math.random() - 0.5).slice(0, limit)));
});

//Return a faq based on an id, also generates related facts
app.get(["/faq/:str", "/faq/", "/faq"], (req, res) => {
  return res.json(faqsData.filter(faq => faq.id === req.params.str.toLowerCase()));
})

app.get("/tags", (req, res) => {
  return res.json(tagsData.map(tagData => {
    tagData["total"] = faqsData.filter(faqData => faqData.tags.includes(tagData.name)).length
    return tagData;
  }));
});

app.get("/tag/:str", (req, res) => {
  return res.json(tagsData.filter(tag => tag.id === req.params.str.toLowerCase()));
});

app.get("/types", (req, res) => {
  return res.json(typesData);
});

app.get("/type/:str", (req, res) => {
  return res.json(typesData.filter(type => type.name.toLowerCase() === req.params.str.toLowerCase()));
});
app.get("/sets", (req, res) => {
  return res.json(setsData);
});


app.listen(3000, () => console.log(`Example app listening on port 3000!`));
