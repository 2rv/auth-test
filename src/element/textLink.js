import React from "react";
import styled from "styled-components";
import { THEME_CONFIG } from "../theme/theme";

export default function TextLink(props) {
  return (
    <Container>
      <Text>{props.text}</Text>
      <Link>{props.linkText}</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Text = styled.span`
  font-family: ${THEME_CONFIG.FONT_FAMILY};
  font-style: normal;
  font-weight: 400;
  font-size: ${THEME_CONFIG.MAIN_FONT_SIZE};
  line-height: 150%;
  color: ${THEME_CONFIG.PROMPT_COLOR};
`;

const Link = styled.span`
  font-family: ${THEME_CONFIG.FONT_FAMILY};
  font-weight: bold;
  text-decoration: underline;
  font-size: ${THEME_CONFIG.MAIN_FONT_SIZE};
  line-height: 150%;
  color: ${THEME_CONFIG.MAIN_COLOR};
  margin-left: 0.3em;
`;
