const SERVER = require("../env");

exports.getAbout = ({ faqsData, typesData, tagsData, setsData }) => {
    return ({
        total: faqsData.length,
        unanswered: faqsData.filter(faq => faq.answer === "").length,
        data: {
            types: {
                about: {
                    api: `${SERVER.URL}/types`,
                    total: typesData.length,
                },
                data: typesData.map(type => {
                    type["total"] = faqsData.filter(faq => faq.type === type.id).length;
                    return type;
                }),
            },
            tags: {
                about: {
                    api: `${SERVER.URL}/tags`,
                    total: tagsData.length,
                },
                data: tagsData.map(tag => {
                    tag["total"] = faqsData.filter(faq => faq.tags.includes(tag.id)).length;
                    return tag;
                }),
            },
            sets: {
                about: {
                    api: `${SERVER.URL}/sets`,
                    total: setsData.length,
                },
                data: setsData,
            }
        }
    })
}

exports.getRandFaq = ({arg, faqsData}) => {
    return (arg > 50 || arg <= 0 || arg === undefined)
    ? faqsData.sort(() => Math.random() - 0.5).slice(0, 1)
    : faqsData.sort(() => Math.random() - 0.5).slice(0, arg)
}

exports.getNamedFaq = ({arg, faqsData})  => {
    let returnFAQ = (arg.split("").length == 7)
        ? faqsData.filter(faq => faq.id === arg)[0]
        : faqsData.filter(faq => faq.number == arg)[0]
    return !!returnFAQ
        ? returnFAQ
        : { error: `FAQ "${arg}" not found!` }
}