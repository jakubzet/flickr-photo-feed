import React from "react";
import P from "prop-types";
import { Layout, Header, Footer } from "../components";
import { actions as entriesActions } from "../store/entries";
import { useDispatch } from "react-redux";

const defaultProps = {
  children: null
};

const DefaultLayout = ({ children } = defaultProps) => {
  const dispatch = useDispatch();

  const handleFilterChange = filterInputText => {
    dispatch(entriesActions.filterEntries(filterInputText));
  };

  const handleFilterClear = () => {
    dispatch(entriesActions.filterEntries(""));
  };

  return (
    <Layout
      header={
        <Header
          onFilterChange={handleFilterChange}
          onFilterClear={handleFilterClear}
        />
      }
      footer={<Footer />}
    >
      {children}
    </Layout>
  );
};

DefaultLayout.propTypes = {
  children: P.node
};

export default DefaultLayout;
