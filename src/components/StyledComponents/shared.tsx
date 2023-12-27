import styled, { css } from "styled-components";
import { BUTTON_THEME_COLOR, mobile } from "./constants";

export const DivWithHorizontalAndVerticalCenterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

export const CancelButton = styled.button`
  border: 1px solid ${BUTTON_THEME_COLOR};
  padding: 10px 32px;
  color: ${BUTTON_THEME_COLOR};
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  border: 1px solid ${BUTTON_THEME_COLOR};
  padding: 10px 32px;
  color: #fff;
  background-color: ${BUTTON_THEME_COLOR};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  a {
    text-decoration: none;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const MobileOnlyDiv = styled.div`
  display: none;
  ${mobile(css`
    display: flex;
  `)}
`;
