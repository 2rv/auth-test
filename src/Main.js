import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLang } from "./store/lang/langAction";
import SignUpPage from "./components/signup/signupPage";
import AuthSuccessfullyPage from "./components/authSuccessfull/authSuccessfullyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./utils/i18next";

function Main() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        dispatch(setLang(data.country_name === "Ukraine" ? "ua" : "en"));
        i18n.changeLanguage(data.country_name === "Ukraine" ? "ua" : "en");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/auth_successfully" element={<AuthSuccessfullyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
