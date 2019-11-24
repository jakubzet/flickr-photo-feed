import styled from "styled-components";
import { rem, transparentize, darken, lighten } from "polished";
import { hideText } from "polished";

export const EntriesCategoryInfoWrapper = styled.div`
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.persianBlue};
`;

export const EntriesCategoryInfo = styled.div`
  padding: 1rem;
  position: relative;

  ${p => p.theme.helpers.createWrapper()};

  @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    flex-direction: row;
    align-items: center;
    padding: 2rem 1rem;
  }

  .EntriesCategoryInfo {
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    opacity: ${p => (p.showContent ? 1 : 0)};
    visibility: ${p => (p.showContent ? "visible" : "hidden")};
    transition: opacity 400ms;

    &__primary {
      display: flex;
      flex-basis: auto;
      align-items: center;
      flex-grow: 1;
      font-family: ${p => p.theme.typography.type.secondary};
      font-weight: ${p => p.theme.typography.weight.bold};

      @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
        font-size: ${p => p.theme.typography.size[3]};
      }
    }

    &__secondary {
      flex-grow: 0;
      margin-top: 1rem;

      @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
        margin-top: 0;
      }
    }

    &__title {
      color: inherit;
    }

    &__link {
      background: url("../static/svg/link.svg") center center no-repeat;
      background-size: contain;
      height: ${rem(24)};
      width: ${rem(24)};
      margin-right: 0.5em;
      flex-shrink: 0;
      transition: transform ${p => p.theme.constants.transitionDuration};
      ${hideText()};

      &:hover {
        transform: scale(1.2);
      }
    }

    &__date {
      display: flex;
      flex-basis: auto;
      align-items: center;

      &:before {
        content: "";
        flex-shrink: 0;
        background: url("../static/svg/calendar.svg") center center no-repeat;
        background-size: cover;
        height: 1.5em;
        width: 1.5em;
        display: inline-block;
        margin-right: 0.5em;
      }
    }
  }
`;

export const EntriesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Entries = styled.ul`
  flex-grow: 1;
`;

export const Entry = styled.li`
  padding: 1rem;
  border-top: dashed ${rem(1)}
    ${p => transparentize(0.75, p.theme.colors.shark)};

  &:nth-of-type(1) {
    border-top: none;
  }

  .Entry {
    &__container {
      display: flex;
      flex-direction: column;
      flex-basis: auto;
      overflow: hidden;
      ${p => p.theme.helpers.createWrapper()};

      @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
        flex-direction: row;
      }
    }

    &__wrapper {
      flex-grow: 0;
      overflow: hidden;
    }

    &__image-wrapper {
      width: 100%;
      height: auto;
      margin-bottom: 0.5rem;
      flex-shrink: 0;

      @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
        margin-right: 1rem;
        margin-bottom: 0;
        width: ${rem(340)};
        height: ${rem(256)};
      }

      & img {
        border-radius: ${rem(2)};
        object-fit: cover;
        width: inherit;
        height: inherit;
      }
    }

    &__title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: ${p => p.theme.typography.type.secondary};
      font-weight: ${p => p.theme.typography.weight.bold};
      font-size: ${p => p.theme.typography.size[2]};
      margin-bottom: 0.5em;
    }

    &__tags {
      display: flex;
      flex-basis: auto;
      flex-wrap: wrap;
      margin-bottom: 1em;

      li {
        & + li {
          margin-left: 0.5em;
        }
      }
    }

    &__details {
      display: flex;
      flex-basis: auto;
      flex-wrap: wrap;

      & > * {
        margin-right: 1em;
      }

      @media screen and (min-width: ${p => p.theme.breakpoints.large}) {
        flex-wrap: nowrap;
      }
    }

    &__date {
      width: 100%;
      order: 1;

      @media screen and (min-width: ${p => p.theme.breakpoints.large}) {
        width: auto;
        order: 3;
      }
    }

    &__author {
      order: 2;
    }

    &__link {
      order: 4;
    }
  }
`;

export const EntryTag = styled.div`
  background: ${p => p.theme.colors.neonCarrot};
  padding: 0.5em 1em;
  border-radius: ${rem(2)};
  text-transform: uppercase;
  font-size: 0.75em;
`;

export const EntriesFetchButton = styled.button`
  background: ${p => p.theme.colors.neonCarrot};
  color: ${p => p.theme.colors.shark};
  font-family: ${p => p.theme.typography.type.secondary};
  font-weight: ${p => p.theme.typography.weight.bold};
  transition: background ${p => p.theme.constants.transitionDuration};
  padding: 1rem;
  width: calc(100% - 1.5rem);
  text-transform: uppercase;
  border-radius: ${rem(2)};
  ${p => p.theme.helpers.createWrapper()};
  margin-bottom: 1rem;

  &:hover,
  &:active {
    cursor: pointer;
    background: ${p => darken(0.25, p.theme.colors.neonCarrot)};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${p => lighten(0.25, p.theme.colors.neonCarrot)};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.medium}) {
    width: calc(100% - 2rem);
  }
`;
