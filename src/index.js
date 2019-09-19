const express = require("express");
const cors = require('cors')
const app = express();

const faqsData = require("./data/faqs");
const tagsData = require("./data/tags");
const typesData = require("./data/types");
const setsData = require("./data/sets");

const PORT = 8080;
const URL = process.env.NODE_ENV === "DEV" ? "http://localhost:8080/" : "https://8snib.sse.codesandbox.io/";


// Middleware
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
      data: typesData.map(type => {
        type["total"] = faqsData.filter(faq => faq.type === type.id).length;
        return type;
      }),
    },
    tags: {
      about: {
        api: "https://8snib.sse.codesandbox.io/tags",
        total: tagsData.length,
      },
      data: tagsData.map(tag => {
        tag["total"] = faqsData.filter(faq => faq.tags.includes(tag.id)).length;
        return tag;
      }),
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

app.get("/tag/", (req, res) => {
  //return res.json(faqsData.filter(faq => faq.tags.includes(req.params.str.toLowerCase())));
  return "Hi";
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


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
