import styled from "styled-components";
import { THEME_CONFIG } from "../theme/theme";

export default function HeaderText(props) {
  return <Text>{props.text}</Text>;
}

const Text = styled.h2`
  font-family: ${THEME_CONFIG.FONT_FAMILY};
`;
