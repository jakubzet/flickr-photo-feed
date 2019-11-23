const fakeDataGenerator = require("../fakeDataGenerator");
const { createFakeResponseData } = fakeDataGenerator;

describe("createFakeResponseData", () => {
  it("Generates sample response data", () => {
    const resData = createFakeResponseData();
    const { title, link, description, modified, generator, items } = resData;

    expect(title).toBeDefined();

    expect(link).toBeDefined();

    expect(description).toBeDefined();

    expect(modified).toBeDefined();
    expect(new Date(modified)).toBeInstanceOf(Date);

    expect(generator).toBeDefined();

    expect(items).toBeDefined();
    expect(items).not.toHaveLength(0);
  });

  it("Replace invalid itemsLength param with default value", () => {
    const resDataWithInvalidParam = createFakeResponseData(
      "Im definitiely not a number"
    );

    expect(resDataWithInvalidParam.items).toHaveLength(2);
  });

  it("Generates sample response data items", () => {
    const resData = createFakeResponseData();
    const firstItem = resData?.items[0] || {};
    const {
      title,
      link,
      media,
      date_taken,
      description,
      published,
      author,
      author_id,
      tags
    } = firstItem;

    expect(title).toBeDefined();

    expect(link).toBeDefined();

    expect(media).toBeDefined();
    expect(media).toHaveProperty("m");

    expect(date_taken).toBeDefined();
    expect(new Date(date_taken)).toBeInstanceOf(Date);

    expect(description).toBeDefined();

    expect(published).toBeDefined();
    expect(new Date(published)).toBeInstanceOf(Date);

    expect(author).toBeDefined();

    expect(author_id).toBeDefined();

    expect(tags).toBeDefined();
  });
});
