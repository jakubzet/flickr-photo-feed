import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  background: ${p => p.theme.colors.shark};
  padding: 1rem;
  color: ${p => p.theme.colors.white};
  font-size: 0.75em;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  ${p => p.theme.helpers.createWrapper()};
`;
