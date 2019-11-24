import styled from "styled-components";
import { hideText, rem } from "polished";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${p => p.theme.helpers.createWrapper()};

  @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    flex-direction: row;
    padding: 0 1rem;
  }
`;

export const Logo = styled.a`
  background: url("../static/svg/logo.svg") left center no-repeat;
  background-size: contain;
  flex-grow: 0;
  width: ${rem(124)};
  height: ${rem(24)};
  margin: 1rem auto;
  transition: transform ${p => p.theme.constants.transitionDuration};
  ${hideText()}

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    width: ${rem(186)};
    height: ${rem(36)};
    margin: 1rem 0;
    padding: 0 1rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  background: ${p => p.theme.colors.shark};
  display: flex;

  @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    margin-left: ${rem(80)};

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: ${rem(-25)};
      height: 100%;
      width: ${rem(80)};
      background: inherit;
      transform: skewX(-35deg);
    }
  }
`;

export const Search = styled.input`
  border-radius: none;
  border: none;
  flex-grow: 1;
  position: relative;
  z-index: 2;
  background: transparent;
  color: ${p => p.theme.colors.white};
  padding: 1em;

  @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    font-size: ${p => p.theme.typography.size[2]};
  }
`;

export const Header = styled.header`
  background: ${p => p.theme.colors.black};
  position: relative;

  @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    &:before {
      content: "";
      position: absolute;
      left: 50%;
      width: 50%;
      height: 100%;
      background: ${p => p.theme.colors.shark};
      top: 0;
      z-index: 1;
    }
  }
`;
