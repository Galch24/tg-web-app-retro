import React, { FC, ReactNode } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import styled from "styled-components";
import { NavBar } from "@/components/NavBar/NavBar";

interface IProps {
  children: ReactNode;
  showNavBar?: boolean;
}

const MainWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const Layout: FC<IProps> = ({ children, showNavBar = true }) => {
  return (
    <div style={{ marginBottom: "80px" }}>
      {/*<Header />*/}
      <MainWrapper>{children}</MainWrapper>
      {/*<Footer />*/}
      {showNavBar && <NavBar />}
    </div>
  );
};

export default Layout;
