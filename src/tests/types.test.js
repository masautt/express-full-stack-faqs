const typesHelper = require("../helpers/typesHelper");

const faqsData = require("./data/faqsTestData");
const typesData = require("./data/typesTestData");

test("typesHelper.getTypesList(typesData) [types] total", () => {
  expect(typesHelper.getTypesList({ typesData: typesData, faqsData: faqsData }).length).toBe(typesData.length);
})

typesHelper.getTypesList({ typesData: typesData, faqsData: faqsData }).forEach((typeData, i) =>
  test(`typesHelper.getNamedTag(typeData) {type} total (${i + 1}/${typesData.length})`, () =>
    expect(typeData.total).toBe(faqsData.filter((faqData =>
      faqData.type == typeData.id)).length)))