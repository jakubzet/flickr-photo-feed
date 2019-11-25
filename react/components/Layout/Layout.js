import React from "react";
import P from "prop-types";
import * as S from "./styled";

export const Layout = ({ children, header, footer }) => (
  <S.Layout>
    {header}
    {children}
    {footer}
  </S.Layout>
);

Layout.propTypes = {
  children: P.node.isRequired,
  header: P.node.isRequired,
  footer: P.node.isRequired
};
