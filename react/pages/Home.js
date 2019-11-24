import React, { useEffect, useState } from "react";
import { EntriesList } from "../components";
import { useDispatch } from "react-redux";
import { apiService } from "../services";
import { actions as entriesActions } from "../store/entries";

const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(entriesActions.requestEntries());
  };

  useEffect(() => {
    apiService.get().then(({ data }) => {
      setEntries(data.items);
    });
  }, []);

  return (
    <>
      <EntriesList
        categoryName={""}
        categoryLink={""}
        categoryDate={""}
        entries={entries}
        isFetching={true}
        onLoadMoreButtonClick={handleClick}
      />
    </>
  );
};

export default HomePage;
