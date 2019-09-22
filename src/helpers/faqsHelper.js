const SERVER = require("../env");

// Create a new object with a summary of all data
exports.getAbout = ({ faqsData, typesData, tagsData, setsData }) => {
    return ({
        total: faqsData.length,
        unanswered: faqsData.filter(faq => faq.answer === "").length,
        data: {
            types: {
                about: {
                    link: `${SERVER.URL}/types`,
                    total: typesData.length,
                },
                data: typesData.map(type => {
                    type["total"] = faqsData.filter(faq => faq.type === type.id).length;
                    return type;
                }),
            },
            tags: {
                about: {
                    link: `${SERVER.URL}/tags`,
                    total: tagsData.length,
                },
                data: tagsData.map(tag => {
                    tag["total"] = faqsData.filter(faq => faq.tags.includes(tag.id)).length;
                    return tag;
                }),
            },
            sets: {
                about: {
                    link: `${SERVER.URL}/sets`,
                    total: setsData.length,
                },
                data: setsData,
            }
        }
    })
}

// Method for getting a random faq
    // Takes in an argument for how many faqs
    // If less greater than 50, only return 1 faq
exports.getRandFaq = ({arg, faqsData}) => {
    return (arg > 50 || arg <= 0 || arg === undefined)
    ? faqsData.sort(() => Math.random() - 0.5).slice(0, 1)
    : faqsData.sort(() => Math.random() - 0.5).slice(0, arg)
}

// Method for getting a specific FAQ by ID or number
    // Takes in an argument as FAQ specifier
    // If it's the length of an id, return that faq by id
    // Else return by number
    // If we don't find that faq by id or number we throw and error
exports.getNamedFaq = ({arg, faqsData})  => {
    let returnFAQ = (arg.split("").length == 7)
        ? faqsData.filter(faq => faq.id === arg)[0]
        : faqsData.filter(faq => faq.number == arg)[0]
    return !!returnFAQ
        ? returnFAQ
        : { error: `FAQ "${arg}" not found!` }
}