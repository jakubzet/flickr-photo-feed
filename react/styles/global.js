import { createGlobalStyle } from "styled-components";
import { fontFace } from "polished";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  ${fontFace({
    fontFamily: "Roboto Regular",
    fontFilePath: "../static/fonts/roboto-regular/roboto-regular-webfont"
  })}

  ${fontFace({
    fontFamily: "Roboto Bold",
    fontFilePath: "../static/fonts/roboto-regular/roboto-bold-webfont",
    fontWeight: "bold"
  })}

  ::-moz-placeholder {
    opacity: 1;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: ${p => p.theme.typography.type.primary};
    font-size: 16px;
    line-height: 1.25;
    overflow-x: hidden;
    background: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
  }

  a {
    color: ${p => p.theme.colors.black};
    text-decoration: underline;

    &:hover {
      text-decoration: underline;
    }
  }

  p, li {
    line-height: 1.5;
  }

  li {
    list-style-type: none;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
`;
