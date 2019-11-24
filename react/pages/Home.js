import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* eslint-disable-next-line */
import { selectors as entriesSelectors } from "../store/entries";
import { actions as entriesActions } from "../store/entries";
import { EntriesList } from "../components";

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    categoryName,
    categoryLink,
    categoryDate,
    items,
    pending,
    /* eslint-disable-next-line */
    error
  } = useSelector(state => state.entries);

  const handleClick = () => {
    /* eslint-disable-next-line */
    alert("LOAD MORE");
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
        onLoadMoreButtonClick={handleClick}
      />
    </>
  );
};

export default HomePage;
