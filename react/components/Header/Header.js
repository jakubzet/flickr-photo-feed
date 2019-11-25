import React, { useState, useEffect } from "react";
import P from "prop-types";
import * as S from "./styled";

const defaultProps = {
  onFilterChange: () => {},
  onFilterClear: () => {}
};

export const Header = ({ onFilterChange, onFilterClear } = defaultProps) => {
  const [filterValue, setFilterValue] = useState("");

  const handleClear = () => {
    setFilterValue("");
    onFilterClear();
  };

  useEffect(() => {
    onFilterChange(filterValue);
  }, [filterValue]);

  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo href="/">
          <h1>Flickr Feeds Fetcher</h1>
        </S.Logo>
        <S.SearchWrapper>
          <S.Search
            type="text"
            placeholder="Filter feed..."
            autocomplete="off"
            onChange={e => setFilterValue(e.target.value.trim())}
            value={filterValue}
          />
          {filterValue.length ? (
            <S.SearchClearButton type="button" onClick={handleClear}>
              &times;
            </S.SearchClearButton>
          ) : null}
        </S.SearchWrapper>
      </S.Wrapper>
    </S.Header>
  );
};

Header.defaultProps = defaultProps;

Header.propTypes = {
  onFilterChange: P.func,
  onFilterClear: P.func
};
