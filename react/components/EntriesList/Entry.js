import React from "react";
import P from "prop-types";
import { Link } from "react-router-dom";
import { prettifyDate } from "../../helpers";
import * as S from "./styled";

const defaultProps = {
  showDescription: false,
  forceMobileView: false
};

const prepareTagsList = tagsStr => {
  return tagsStr
    .trim()
    .split(" ")
    .map((tag, idx) => {
      const tagKey = `tag_${idx}`;
      return (
        <li key={tagKey}>
          <S.EntryTag
            href={`https://www.flickr.com/search/?q=${tag}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tag}
          </S.EntryTag>
        </li>
      );
    });
};

const prepareCreditsLink = (authorStr = '# ("anonymous")') => {
  const [mail, nickname] = authorStr.split(" ");
  const prettyNickname = nickname.replace(/[(")]/gi, "");

  return <a href={`mailto:${mail}`}>{prettyNickname}</a>;
};

export const Entry = ({
  data,
  showDescription,
  forceMobileView
} = defaultProps) => {
  const hasTags = data.tags && data.tags.trim().length;
  const itemID = data.link
    .split("/")
    .filter(i => !!i)
    .reverse()[0];
  const detailsURL = `/details/${itemID}`;

  const displayTitle = () => <h2 className="Entry__title">{data.title}</h2>;
  const displayImage = () => <img src={data.media.m} alt={data.title} />;

  return (
    <S.Entry forceMobileView={forceMobileView}>
      <article className="Entry__container">
        {showDescription ? (
          <div className="Entry__image-wrapper">{displayImage()}</div>
        ) : (
          <Link to={detailsURL} className="Entry__image-wrapper">
            {displayImage()}
          </Link>
        )}

        <div className="Entry__wrapper">
          {showDescription ? (
            displayTitle()
          ) : (
            <Link to={detailsURL}>{displayTitle()}</Link>
          )}

          {showDescription && (
            <div
              className="Entry__desc"
              dangerouslySetInnerHTML={{
                __html: data.description
              }}
            />
          )}

          {hasTags && (
            <ul className="Entry__tags">{prepareTagsList(data.tags)}</ul>
          )}

          <div className="Entry__credits">
            Photo by: {prepareCreditsLink(data.author)}
          </div>

          <div className="Entry__details">
            <div className="Entry__date">
              Published: {prettifyDate(data.published)}
            </div>

            <div className="Entry__author">
              <a
                href={`https://www.flickr.com/photos/${data.author_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Author&apos;s page
              </a>
            </div>

            <div className="Entry__link">
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                View on flickr
              </a>
            </div>
          </div>
        </div>
      </article>
    </S.Entry>
  );
};

Entry.propTypes = {
  data: P.shape({
    title: P.string.isRequired,
    link: P.string.isRequired,
    media: P.shape({
      m: P.string.isRequired
    }).isRequired,
    date_taken: P.string.isRequired,
    description: P.string.isRequired,
    published: P.string.isRequired,
    author: P.string.isRequired,
    author_id: P.string.isRequired,
    tags: P.string.isRequired
  }).isRequired,
  showDescription: P.bool,
  forceMobileView: P.bool
};
