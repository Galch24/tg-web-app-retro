import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, DropDownMenu } from "@/components/ui";
import Nav from "@/components/nav/Nav";
import { Logo } from "@/components/logo/Logo";

import { useWindowSize } from "@/hooks/useWindowSize";
import { media, theme } from "@/assets/styles/Theme";
import { toggleMenu } from "@/store/slices/mobileMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SButtonClose } from "@/pages/styled";
import { useTelegram } from "@/hooks/useTelegram";

const { palette } = theme;

const HeaderBlock = styled.header`
  background: ${palette.common.black};
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;
  max-width: 1262px;
  border-radius: 30px;
  width: calc(100% - 40px);
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: 10;
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
    transition: 0.4s ease;
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

const BurgerMenu = styled.div<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 0;
  overflow-x: hidden;
  padding: 0 50px;
  z-index: 10;
  background: ${theme.palette.common.black};

  ${({ isActive }) =>
    isActive &&
    `
    height:100vh;
  `}
`;

const Header = () => {
  // const { mobileWidth, windowWidth } = useWindowSize();
  // const dispatch = useDispatch();
  // const { isOpen } = useSelector((state: RootState) => state.mobileMenu);
  //
  // const toggleMobileNav = () => {
  //   dispatch(toggleMenu());
  // };

  const { onClose } = useTelegram();

  return (
    <>
      <HeaderBlock>
        <HeaderWrapper>
          <HeaderWrapperLeft>
            <Link to='/'>
              <Logo />
            </Link>
          </HeaderWrapperLeft>
          <HeaderWrapperRight>
            {/*{windowWidth >= 1200 && <Nav />}*/}
            {/*{windowWidth <= 1200 && (*/}
            {/*  <Burger onClick={toggleMobileNav} isActive={isOpen} />*/}
            {/*)}*/}
            <SButtonClose onClick={onClose}>Закрыть</SButtonClose>
          </HeaderWrapperRight>
        </HeaderWrapper>
      </HeaderBlock>
      {/*{isOpen && windowWidth <= 1200 && (*/}
      {/*  <BurgerMenu isActive={isOpen}>*/}
      {/*    <Nav onNavClick={toggleMobileNav} />*/}
      {/*  </BurgerMenu>*/}
      {/*)}*/}
    </>
  );
};

export default Header;
