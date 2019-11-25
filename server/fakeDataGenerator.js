const faker = require("faker");
const { lorem, image, internet, date, random } = faker;

function createFakeResponseData(itemsLength = 2) {
  const safeItemsLength = isNaN(itemsLength) ? 2 : itemsLength;

  const fakeItems = [...Array(safeItemsLength)].map(() => ({
    title: lorem.paragraph(),
    link: internet.url(),
    media: {
      m: image.imageUrl()
    },
    date_taken: date.recent(),
    description: `<p>${lorem.paragraph()}</p>`,
    published: date.recent(),
    author: `${internet.email()} ("${lorem.word()}")`,
    author_id: random.uuid(),
    tags: lorem.words()
  }));

  return {
    title: lorem.paragraph(),
    link: internet.url(),
    description: lorem.paragraph(),
    modified: date.recent(),
    generator: internet.url(),
    items: fakeItems
  };
}

module.exports = {
  createFakeResponseData
};
