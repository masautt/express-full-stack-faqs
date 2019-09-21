const tagsHelper = require("../helpers/tagsHelper");

const faqsData = require("./data/faqsTestData");
const tagsData = require("./data/tagsTestData");

test("tagsHelper.getTagsList(tagsData) [tags] total", () => {
  expect(tagsHelper.getTagsList({ tagsData: tagsData, faqsData: faqsData }).length).toBe(tagsData.length);
})

tagsHelper.getTagsList({ tagsData: tagsData, faqsData: faqsData }).forEach((tagData, i) =>
  test(`tagsHelper.getNamedTag(tagsData) {tag} total (${i + 1}/${tagsData.length})`, () =>
    expect(tagData.total).toBe(faqsData.filter((faqData =>
      faqData.tags.includes(tagData.id))).length)))