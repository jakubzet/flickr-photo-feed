import styled from "styled-components";

export const Layout = styled.main`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;

  & > * {
    max-width: 100vw;
  }
`;
