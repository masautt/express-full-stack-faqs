const faqsData = require("./faqs");
const tagsData = require("./tags");

//console.log(faqsData.filter(i => i.tags.includes("JavaScript")).length);


tagsData.map(tagData => {
    console.log(tagData.name, faqsData.filter(faqData => faqData.tags.includes(tagData.name)).length)
});