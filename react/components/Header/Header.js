import React from "react";
import * as S from "./styled";

export const Header = () => (
  <S.Header>
    <S.Wrapper>
      <S.Logo href="/">
        <h1>Flickr Feeds Fetcher</h1>
      </S.Logo>
      <S.SearchWrapper>
        <S.Search type="text" placeholder="Filter feed..." autocomplete="off" />
      </S.SearchWrapper>
    </S.Wrapper>
  </S.Header>
);
