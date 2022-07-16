import React from "react";
import styled from "styled-components";
import { THEME_CONFIG } from "../theme/theme";

export default function ErrorLable(props) {
  return (
    <Container>
      <Icon>!</Icon>
      <Lable>{props.text}</Lable>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: 1px solid ${THEME_CONFIG.ERROR_COLOR};
  border-radius: ${THEME_CONFIG.MAIN_BORDER_RADIUS};
  width: 345px;
  height: 36px;
  align-items: center;
`;
const Lable = styled.span`
  font-family: ${THEME_CONFIG.FONT_FAMILY};
  font-style: normal;
  font-weight: 400;
  font-size: ${THEME_CONFIG.MAIN_FONT_SIZE};
  color: ${THEME_CONFIG.ERROR_COLOR};
`;

const Icon = styled.div`
  margin: 0 16px;
  width: 1.15em;
  font-size: ${THEME_CONFIG.SECONDARY_FONT_SIZE};
  border-radius: 50%;
  text-align: center;
  color: white;
  background: ${THEME_CONFIG.ERROR_COLOR};
`;
