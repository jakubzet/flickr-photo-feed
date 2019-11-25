/* global document */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Home";
import configureStore from "./store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <DefaultLayout>
          <HomePage />
        </DefaultLayout>
      </>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
