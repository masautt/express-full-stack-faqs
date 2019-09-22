const SERVER = require("../env");

// Method for getting all types
    // Loops through each type
    // Determines how many faqs have that type
exports.getTypesList = ({typesData, faqsData}) => {
    return typesData.map(typeData => {
        typeData["total"] = faqsData.filter(faqData => faqData.type === typeData.id).length
        return typeData;
    });
}

// Method for getting all faqs with specified type
    // First checks if the type is found in the typesData
    // If the type does exist, check if any faqs include that type
    // Return those faqs that do have the specified type
    // Or Return an error if no faqs have that type
exports.getNamedType = ({arg, typesData, faqsData}) => {
    if (!(typesData.filter(typeData => typeData.id === arg).length))
        return { error: `Could not find type "${arg}"` };

    let foundType = faqsData.filter(faq => faq.type === arg);
    return !!foundType.length
        ? foundType
        : { error: `No FAQS currently have type "${arg}"` }

}