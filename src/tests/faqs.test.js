const faqsHelper = require("../helpers/faqsHelper");

const faqsData = require("./data/faqsTestData");
const typesData = require("./data/typesTestData");
const tagsData = require("./data/tagsTestData");
const setsData = require("./data/setsTestData");

const allData = {
  faqsData: faqsData,
  tagsData: tagsData,
  typesData: typesData,
  setsData: setsData
}

// faqsHelper.getAbout(allData) tests

test("faqsHelper.getAbout() - {about} total - (1/1)", () => {
  expect(faqsHelper.getAbout(allData).total).toBe(faqsData.length);
})

test("faqsHelper.getAbout() - [types] total - (1/2)", () => {
  expect(faqsHelper.getAbout(allData).data.types.about.total).toBe(faqsHelper.getAbout(allData).data.types.data.length);
})

test("faqsHelper.getAbout() - [types] total - (2/2)", () => {
  expect(faqsHelper.getAbout(allData).data.types.about.total).toBe(typesData.length);
})

test("faqsHelper.getAbout() - [tags] total - (1/2)", () => {
  expect(faqsHelper.getAbout(allData).data.tags.about.total).toBe(faqsHelper.getAbout(allData).data.tags.data.length);
})

test("faqsHelper.getAbout() - [tags] total - (2/2)", () => {
  expect(faqsHelper.getAbout(allData).data.tags.about.total).toBe(tagsData.length);
})

test("faqsHelper.getAbout() - [sets] total - (1/2)", () => {
  expect(faqsHelper.getAbout(allData).data.sets.about.total).toBe(faqsHelper.getAbout(allData).data.sets.data.length);
})

test("faqsHelper.getAbout() - [sets] total - (2/2)", () => {
  expect(faqsHelper.getAbout(allData).data.sets.about.total).toBe(faqsHelper.getAbout(allData).data.sets.data.length);
})


// faqsHelper.getRand(allData) tests

test("faqsHelper.getRandFaq() - [faqs] total - (1/4)", () => {
  expect(faqsHelper.getRandFaq({arg: 1, faqsData: faqsData}).length).toBe(1);
})

test("faqsHelper.getRandFaq() - [faqs] total - (2/4)", () => {
  expect(faqsHelper.getRandFaq({arg: 2, faqsData: faqsData}).length).toBe(2);
})

test("faqsHelper.getRandFaq() - [faqs] total - (2/4)", () => {
  expect(faqsHelper.getRandFaq({arg: 0, faqsData: faqsData}).length).toBe(1);
})

test("faqsHelper.getRandFaq() - [faqs] total - (3/4)", () => {
  expect(faqsHelper.getRandFaq({arg: 50, faqsData: faqsData}).length).toBe(faqsData.length);
})

test("faqsHelper.getRandFaq() - [faqs] total - (4/4)", () => {
  expect(faqsHelper.getRandFaq({arg: 51, faqsData: faqsData}).length).toBe(1);
})