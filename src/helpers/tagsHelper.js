const SERVER = require("../env");

exports.getTagsList = ({tagsData, faqsData}) => {
    return tagsData.map(tagData => {
        tagData["total"] = faqsData.filter(faqData => faqData.tags.includes(tagData.id)).length
        return tagData;
    });
}

exports.getNamedTag = ({arg, tagsData, faqsData}) => {
    if (!(tagsData.filter(tagData => tagData.id === arg).length))
        return { error: `Could not find tag "${arg}"` };

    let foundTag = faqsData.filter(faq => faq.tags.includes(arg));
    return !!foundTag.length
        ? foundTag
        : { msg: `No FAQS currently have tag "${arg}"` }
}