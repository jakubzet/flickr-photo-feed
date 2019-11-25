import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors as entriesSelectors } from "../store/entries";
import { actions as entriesActions } from "../store/entries";
import { EntriesList } from "../components";

const HomePage = () => {
  const dispatch = useDispatch();

  const {
    categoryName,
    categoryLink,
    categoryDate,
    pending,
    filterText,
    // TODO: Error handling
    /* eslint-disable-next-line */
    error
  } = useSelector(entriesSelectors.storeSelector);

  const items = useSelector(entriesSelectors.filteredEntriesItemsSelector);

  const handleClick = () => {
    dispatch(entriesActions.requestEntries());
  };

  useEffect(() => {
    dispatch(entriesActions.requestEntries());
  }, [dispatch]);

  return (
    <>
      <EntriesList
        categoryName={categoryName}
        categoryLink={categoryLink}
        categoryDate={categoryDate}
        entries={items}
        isFetching={pending}
        showLoadMoreButton={!filterText.length}
        onLoadMoreButtonClick={handleClick}
      />
    </>
  );
};

export default HomePage;
