import React, { Suspense } from "react";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";
import store from "./store/store";
import Main from "./Main";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback="loading">
        <Normalize />
        <Main />
      </Suspense>
    </Provider>
  );
}
export default App;
