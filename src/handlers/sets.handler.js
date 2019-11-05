
// Method for getting all sets
    // Gets the total of each
exports.getSetsList = ({setsData}) => {
    return setsData.map(setData => {
        setData["total"] = setData.faqs.length
        return setData;
    });
}

// Method for getting a set by id
    // Takes in an argument for set id
    // First it gets the set that has the same id
    // Then, for each faqs in the set, get the full set data and return
exports.getNamedSet = ({arg, setsData, faqsData}) => {
    let rawSet = setsData.filter(set => set.id.toLowerCase() == arg)[0];
    return rawSet.faqs.map(faq => faqsData.filter(faqData => faqData.id === faq.slice(0, 7))[0]);
}