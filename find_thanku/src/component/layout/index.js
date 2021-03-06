import * as S from "./styles";

import React from "react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <S.LayoutContainer>{children}</S.LayoutContainer>
      <Footer />
    </S.Layout>
  );
};

export default Layout;
