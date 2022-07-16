import styled from "styled-components";
import React from "react";
import { useTranslation } from "react-i18next";
import "../utils/i18next";
import { THEME_CONFIG } from "../theme/theme";

export default function FormInput(props) {
  const { title, name, placeholder, onChange, onBlur, value, error, type } =
    props;
  const { t } = useTranslation();
  return (
    <div>
      <Title>{title}</Title>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <ErrorMessage>{t(error)}</ErrorMessage>}
    </div>
  );
}

const Title = styled.span`
  font-family: ${THEME_CONFIG.FONT_FAMILY};
  font-style: normal;
  font-weight: 400;
  font-size: ${THEME_CONFIG.MAIN_FONT_SIZE};
  line-height: 100%;
`;

const ErrorMessage = styled.span`
  font-family: ${THEME_CONFIG.FONT_FAMILY};
  font-style: normal;
  font-weight: 400;
  font-size: ${THEME_CONFIG.SECONDARY_FONT_SIZE};
  line-height: 100%;
  color: ${THEME_CONFIG.ERROR_COLOR};
`;

const Input = styled.input`
  box-sizing: border-box;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;

  width: 345px;
  height: 46px;

  background: ${THEME_CONFIG.MAIN_BACKGROUND_COLOR};
  border: 1px solid ${THEME_CONFIG.ERROR_COLOR};
  border-radius: ${THEME_CONFIG.MAIN_BORDER_RADIUS};

  ::placeholder {
    font-family: ${THEME_CONFIG.FONT_FAMILY};
    font-style: normal;
    font-weight: 400;
    font-size: ${THEME_CONFIG.MAIN_FONT_SIZE};
    line-height: 100%;
    color: ${THEME_CONFIG.PROMPT_COLOR};
  }
  :focus {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
    width: 345px;
    height: 46px;
    background: ${THEME_CONFIG.MAIN_BACKGROUND_COLOR};
    outline: none;
    border: none;
    border-radius: ${THEME_CONFIG.MAIN_BORDER_RADIUS};
  }
`;
