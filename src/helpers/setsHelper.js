const SERVER = require("../env");

exports.getSetsList = ({setsData}) => {
    return setsData.map(setData => {
        setData["total"] = setData.faqs.length
        return setData;
    });
}

exports.getNamedSet = ({arg, setsData, faqsData}) => {
    let rawSet = setsData.filter(set => set.id.toLowerCase() == arg)[0];
    return rawSet.faqs.map(faq => faqsData.filter(faqData => faqData.id === faq.slice(0, 7))[0]);
}