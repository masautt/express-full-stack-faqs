const setsHelper = require("../helpers/setsHelper");

const faqsData = require("./data/faqsTestData");
const setsData = require("./data/setsTestData");


// setsHelper.getSetsList(setData) tests

test("setsHelper.getSetsList(setData) [sets] total", () => {
    expect(setsHelper.getSetsList({ setsData: setsData }).length).toBe(setsData.length);
})

setsData.forEach((e, i) => {
    test(`setsHelper.getSetsList(setData) sets[${i}] (${i+1}/${setsData.length})`, () => {
        expect(setsHelper.getSetsList({ setsData: setsData })[i].faqs.length).toBe(setsHelper.getSetsList({ setsData: setsData })[i].total);
    })
})