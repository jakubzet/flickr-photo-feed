import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "../../utils/reactTestingLibrary";
import { EntriesList } from "./EntriesList";

describe("EntriesList", () => {
  it("Renders", () => {
    const sampleEntries = [
      {
        title: "Lorem ipsum",
        link: "#",
        media: {
          m: "#"
        },
        date_taken: "Fri Dec 27 2019 01:14:14 GMT+0100",
        description: "Lorem ipsum",
        published: "Fri Dec 27 2019 01:14:14 GMT+0100",
        author: "Lorem ipsum",
        author_id: "id1",
        tags: "Lorem ipsum"
      }
    ];

    const { container, asFragment } = render(
      <Router>
        <EntriesList isFetching={false} entries={sampleEntries} />
      </Router>
    );

    expect(container).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
