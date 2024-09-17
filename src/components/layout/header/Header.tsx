import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, DropDownMenu } from "@/components/ui";
import Nav from "@/components/nav/Nav";
import { Logo } from "@/components/logo/Logo";

import { useWindowSize } from "@/hooks/useWindowSize";
import {
  media,
  theme
} from "@/assets/styles/Theme";
import { mainDomen } from "@/shared/config/env";

const { palette } = theme;

const HeaderBlock = styled.header`
  padding: 16px 0;
  background: ${palette.common.black};
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1262px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  
  
  @media (min-width: 1200px) {
    padding: 0;
  }
`;

const HeaderWrapperLeft = styled.div`
  display: flex;
  
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const HeaderWrapperRight = styled.div`
  display: flex;
  align-content: center;
`;

interface BurgerProps {
  isActive: boolean;
}

const Burger = styled.button<BurgerProps>`
  position: relative;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  padding: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
    height: 1px;
    display: block;
    background: ${palette.common.white};
  }

  &::after {
    top: auto;
    bottom: 10px;
  }

  ${({ isActive }) =>
    isActive &&
    `
    &::before {
      transform: rotate(45deg);
      top: 48%;
    }

    &::after {
      transform: rotate(-45deg);
      bottom: 48%;
    }
  `}
`;

const BurgerMenu = styled.div<BurgerProps>`
  position: fixed;
  top: 65px;
  right: 0;
  height: 0;
  width: 100%;
  overflow-x: hidden;
  padding: 20px;
  z-index: 10;
  background: ${theme.palette.common.black};

  ${({ isActive }) =>
    isActive &&
    `
   height: 100%;
  `}
`;

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { mobileWidth, windowWidth } = useWindowSize();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <HeaderBlock>
        <HeaderWrapper>
          <HeaderWrapperLeft>
            <Link to='/'>
              <Logo />
            </Link>
          </HeaderWrapperLeft>
          <HeaderWrapperRight>
            {windowWidth >= 1200 && <Nav />}
            {windowWidth <= 1200 && (
              <Burger onClick={toggleMobileNav} isActive={isMobileNavOpen} />
            )}
          </HeaderWrapperRight>
        </HeaderWrapper>
      {isMobileNavOpen && windowWidth <= 1200 && (
        <BurgerMenu isActive={isMobileNavOpen}>
          <Nav onNavClick={toggleMobileNav} />
        </BurgerMenu>
      )}
    </HeaderBlock>
  );
};

export default Header;
