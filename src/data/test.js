const faqsData = require("./faqs");
const typesData = require("./types");

//console.log(faqsData.filter(i => i.tags.includes("JavaScript")).length);

let newTypes = typesData.map(typeData => {
    typeData["total"] = faqsData.filter(faqData => faqData.type === typeData.id).length
    return typeData;
});

console.log(newTypes);