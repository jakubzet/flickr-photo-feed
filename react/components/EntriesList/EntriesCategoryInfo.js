import React from "react";
import P from "prop-types";
import { MoonLoader } from "react-spinners";
import * as S from "./styled";
import { prettifyDate } from "../../helpers";

const loaderStyles = {
  position: "absolute",
  animationDuration: "1200ms",
  left: "50%",
  top: "50%",
  marginTop: "-30px",
  marginLeft: "-30px"
};

const defaultProps = {
  title: null,
  link: null,
  date: null
};

export const EntriesCategoryInfo = ({
  title,
  link,
  date,
  isLoadingData
} = defaultProps) => {
  return (
    <S.EntriesCategoryInfoWrapper>
      <S.EntriesCategoryInfo showContent={!isLoadingData}>
        <MoonLoader
          css={loaderStyles}
          sizeUnit={"px"}
          size={50}
          color={"#fff"}
          loading={isLoadingData}
        />

        <div className="EntriesCategoryInfo">
          <div className="EntriesCategoryInfo__primary">
            <a href={link} className="EntriesCategoryInfo__link">
              {title}
            </a>
            <div className="EntriesCategoryInfo__title">{title}</div>
          </div>

          <div className="EntriesCategoryInfo__secondary">
            <div className="EntriesCategoryInfo__date">
              Modified: {prettifyDate(date).toString()}
            </div>
          </div>
        </div>
      </S.EntriesCategoryInfo>
    </S.EntriesCategoryInfoWrapper>
  );
};

EntriesCategoryInfo.defaultProps = defaultProps;

EntriesCategoryInfo.propTypes = {
  title: P.string,
  link: P.string,
  date: P.string,
  isLoadingData: P.bool.isRequired
};
