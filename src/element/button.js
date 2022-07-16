import React from "react";
import styled from "styled-components";
import { THEME_CONFIG } from "../theme/theme";

export default function SubmitButton(props) {
  const { type, text, disabled } = props;
  return (
    <Button type={type} disabled={disabled}>
      {text}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 140px;
  gap: 10px;

  width: 345px;
  height: 46px;

  background: ${THEME_CONFIG.MAIN_COLOR};
  border-radius: ${THEME_CONFIG.MAIN_BORDER_RADIUS};
  outline: none;
  border: none;

  font-family: ${THEME_CONFIG.FONT_FAMILY};
  font-style: normal;
  font-weight: 700;
  font-size: ${THEME_CONFIG.MAIN_FONT_SIZE};
  line-height: 100%;

  text-align: center;

  color: #ffffff;
`;
