import styled from "styled-components";
import { rem, darken } from "polished";

export const Modal = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  flex-direction: column;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 1.5rem;
  font-size: 3em;
  z-index: 902;
  width: auto !important;

  a {
    color: ${p => p.theme.colors.neonCarrot};
    text-decoration: none;
    transition: color ${p => p.theme.constants.transitionDuration};

    &:hover,
    &:active {
      cursor: pointer;
      color: ${p => darken(0.25, p.theme.colors.neonCarrot)};
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  margin: 10% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
  flex-direction: column;
  background: ${p => p.theme.colors.white};
  border-radius: ${rem(2)};
  z-index: 901;
  overflow: auto;
  padding: 4rem 2rem;

  & > * {
    max-height: 100%;
    width: 100%;
  }
`;
