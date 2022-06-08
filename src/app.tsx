import React from "react";
import { AppContainer, Main } from "./appstyle";
import { Footer } from "./container/Footer/Footer";
import { Header } from "./container/Header/Header";
import { CurrencyList } from "./pages/CurrencyList/CurrencyList";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <CurrencyList />
      </Main>
      <Footer />
    </AppContainer>
  );
};

export { App };