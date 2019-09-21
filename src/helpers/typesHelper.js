const SERVER = require("../env");

exports.getTypesList = ({typesData, faqsData}) => {
    return typesData.map(typeData => {
        typeData["total"] = faqsData.filter(faqData => faqData.type === typeData.id).length
        return typeData;
    });
}

exports.getNamedType = ({arg, typesData, faqsData}) => {
    if (!(typesData.filter(typeData => typeData.id === arg).length))
        return { error: `Could not find type "${arg}"` };

    let foundType = faqsData.filter(faq => faq.type === arg);
    return !!foundType.length
        ? foundType
        : { msg: `No FAQS currently have type "${arg}"` }

}