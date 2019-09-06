//Fullstack backend
const express = require("express");
const faqs = require("./data/faqs");
const tags = require("./data/tags");
const types = require("./data/types");
const sets = require("./data/sets");
const cors = require('cors')
const app = express();

app.use(cors())

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.get("/info", (req, res) => {
  return res.json({
      total: faqs.length,
      unanswered: faqs.filter(faq => faq.answer === "").length,
      types: {
        api: "https://8snib.sse.codesandbox.io/types",
        total:  types.length,
      },
      tags: {
        api: "https://8snib.sse.codesandbox.io/tags",
        total:  tags.length,
      },
      sets: {
        api: "https://8snib.sse.codesandbox.io/sets",
        total:  sets.length,
      }
  });
});

//Return a list of random faqs (mainly for the marquees on the frontend)
app.get(["/rand/:num", "/rand/", "/rand"], (req, res) => {
  //If the limit is greater than 20, less than zero or not given then just return 10
  let num = req.params.num;
  let limit = num > 50 || num <= 0 || num === undefined ? 1 : num;
  return(res.json(faqs.sort(() => Math.random() - 0.5).slice(0, limit)));
});

//Return a faq based on an id, also generates related facts
app.get(["/faq/:str","/faq/", "/faq"], (req, res) => {
  return res.json(faqs.filter(faq => faq.id === req.params.str.toLowerCase()));
})

app.get("/tags", (req, res) => {
  return res.json(tags);
});

app.get("/tag/:str", (req, res) => {
  return res.json(tags.filter(tag => tag.name.toLowerCase() === req.params.str.toLowerCase()));
});

app.get("/types", (req, res) => {
  return res.json(types);
});

app.get("/type/:str", (req, res) => {
  return res.json(types.filter(type => type.name.toLowerCase() === req.params.str.toLowerCase()));
});
app.get("/sets", (req, res) => {
  return res.json(sets);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
