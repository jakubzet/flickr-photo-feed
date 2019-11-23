import React from "react";
import P from "prop-types";

const defaultProps = {
  children: null
}

export const Sample = ({children} = defaultProps) => <div>
  <div>Hello Sample!</div>
  <div>{children}</div>
</div>;

Sample.defaultProps = defaultProps;

Sample.propTypes = {
  children: P.node
};