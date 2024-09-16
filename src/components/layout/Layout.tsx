import React, { FC, ReactNode } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const MainWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      {/*<Footer />*/}
    </>
  );
};

export default Layout;
