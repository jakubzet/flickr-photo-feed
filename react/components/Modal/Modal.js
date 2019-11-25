import React from "react";
import P from "prop-types";
import * as S from "./styled";

const defaultProps = {
  children: null,
  closeButtonContent: () => {}
};

export const Modal = ({ children, closeButtonContent } = defaultProps) => (
  <S.Modal>
    <S.ModalContent>
      <S.CloseButton>{closeButtonContent}</S.CloseButton>
      {children}
    </S.ModalContent>
  </S.Modal>
);

Modal.defaultProps = defaultProps;

Modal.propTypes = {
  children: P.node,
  closeButtonContent: P.node
};
