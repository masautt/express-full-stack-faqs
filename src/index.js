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

app.get(["/", "/about", "/info", "/api"], (req, res) => {
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

app.get("/rand/:arg", (req, res) => {
    let arg = req.params.arg;
    return (arg > 50 || arg <= 0 || arg === undefined)
        ? res.json(faqsData.sort(() => Math.random() - 0.5).slice(0, 1))
        : res.json(faqsData.sort(() => Math.random() - 0.5).slice(0, arg))
});

app.get("/faq/:arg", (req, res) => {
    let arg = req.params.arg.toLowerCase();
    let returnFAQ =  (arg.split("").length == 7)
        ? faqsData.filter(faq => faq.id === arg)[0]
        : faqsData.filter(faq => faq.number == arg)[0]
    console.log(returnFAQ);
    return !!returnFAQ
        ? res.json(returnFAQ) 
        : res.json({error: `FAQ "${arg}" not found!`})
})

app.get("/tags", (req, res) => {
    return res.json(tagsData.map(tagData => {
        tagData["total"] = faqsData.filter(faqData => faqData.tags.includes(tagData.id)).length
        return tagData;
    }));
});

app.get("/tag/:arg", (req, res) => {
    let arg = req.params.arg.toLowerCase();
    if (!(tagsData.filter(tagData => tagData.id === arg).length)) 
        return res.json({error : `Could not find tag "${arg}"`});

    let foundTag = faqsData.filter(faq => faq.tags.includes(arg));
    return !!foundTag.length
        ? res.json(foundTag) 
        : res.json({msg: `No FAQS currently have tag "${arg}"`})
});

app.get("/types", (req, res) => {
    return res.json(typesData.map(typeData => {
        typeData["total"] = faqsData.filter(faqData => faqData.type === typeData.id).length
        return typeData;
    }));
});

app.get("/type/:arg", (req, res) => {
    let arg = req.params.arg.toLowerCase();
    if (!(typesData.filter(typeData => typeData.id === arg).length)) 
        return res.json({error : `Could not find type "${arg}"`});

    let foundType = faqsData.filter(faq => faq.type === arg);
    return !!foundType.length
        ?  res.json(foundType) 
        :  res.json({msg: `No FAQS currently have type "${arg}"` })
    
});

app.get("/sets", (req, res) => {
    return res.json(setsData.map(setData => {
        setData["total"] = setData.faqs.length
        return setData;
    }));
});

app.get("/set/:arg", (req, res) => {
    let arg = req.params.arg.toLowerCase();
    let rawSet = setsData.filter(set => set.id == arg)[0];
    return res.json(rawSet.faqs.map(faq => faqsData.filter(faqData => faqData.id === faq.slice(0,7))[0]));
});

app.listen(PORT, () => console.log(`full-stack-faqs-back-end running on ${PORT}!`));
