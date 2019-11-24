/* global document */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { Layout, Header, Footer } from "./components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes";
import HomePage from "./pages/Home";
import configureStore from "./store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        <Layout header={<Header />} footer={<Footer />}>
          <HomePage />
        </Layout>
      </>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
