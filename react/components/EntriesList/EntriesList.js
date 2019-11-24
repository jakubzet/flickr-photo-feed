import React from "react";
import P from "prop-types";
import * as S from "./styled";
import { EntriesCategoryInfo } from "./EntriesCategoryInfo";
import { Entry } from "./Entry";

const defaultProps = {
  categoryName: "",
  categoryLink: "",
  categoryDate: "",
  entries: [],
  onLoadMoreButtonClick: () => {}
};

export const EntriesList = ({
  categoryName,
  categoryLink,
  categoryDate,
  entries,
  isFetching,
  onLoadMoreButtonClick
} = defaultProps) => {
  return (
    <S.EntriesList>
      <EntriesCategoryInfo
        title={categoryName}
        link={categoryLink}
        date={categoryDate}
        isLoadingData={isFetching}
      />
      <S.Entries>
        {entries &&
          entries.map((entry, idx) => {
            const entryKey = `entry_${idx}`;
            return <Entry key={entryKey} data={entry} />;
          })}
      </S.Entries>

      <S.EntriesFetchButton
        type="button"
        className="entries-list__fetch-button"
        onClick={onLoadMoreButtonClick}
        disabled={isFetching}
      >
        Load more...
      </S.EntriesFetchButton>
    </S.EntriesList>
  );
};

EntriesList.defaultProps = EntriesList;

EntriesList.propTypes = {
  categoryName: P.string,
  categoryLink: P.string,
  categoryDate: P.string,
  entries: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      link: P.string.isRequired,
      media: P.shape({
        m: P.string.isRequired
      }),
      date_taken: P.string.isRequired,
      description: P.string.isRequired,
      published: P.string.isRequired,
      author: P.string.isRequired,
      author_id: P.string.isRequired,
      tags: P.string
    })
  ),
  isFetching: P.bool.isRequired,
  onLoadMoreButtonClick: P.func
};