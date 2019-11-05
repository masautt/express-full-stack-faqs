
// Method for getting all tags
    // Loops through each tag
    // Determines how many faqs contain that tag id
exports.getTagsList = ({tagsData, faqsData}) => {
    return tagsData.map(tagData => {
        tagData["total"] = faqsData.filter(faqData => faqData.tags.includes(tagData.id)).length
        return tagData;
    });
}

// Method for getting all faqs with specified tag
    // First checks if the tag is found in the tagsData
    // If the tag does exist, check if any faqs include that tag
    // Return those faqs that do have the tag
    // Or Return an error if no faqs have that tag
exports.getNamedTag = ({arg, tagsData, faqsData}) => {
    if (!(tagsData.filter(tagData => tagData.id === arg).length))
        return { error: `Could not find tag "${arg}"` };

    let foundTag = faqsData.filter(faq => faq.tags.includes(arg));
    return !!foundTag.length
        ? foundTag
        : { error: `No FAQS currently have tag "${arg}"` }
}