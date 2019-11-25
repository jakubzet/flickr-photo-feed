import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectors as entriesSelectors } from "../store/entries";
import { EntriesList, Modal } from "../components";

const DetailsPage = () => {
  const { id } = useParams();
  const { items } = useSelector(entriesSelectors.storeSelector);
  const itemData = items.find(item => item.link.indexOf(id) > -1);

  if (!itemData) {
    return <Redirect to="/" />;
  }

  return (
    <Modal closeButtonContent={<Link to="/">&times;</Link>}>
      <div>
        <EntriesList.Entry
          idx={+id}
          data={itemData}
          showDescription
          forceMobileView
        />
      </div>
    </Modal>
  );
};

export default DetailsPage;
