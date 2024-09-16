import React from "react";
import { Container } from "@/components/ui";
import styled from "styled-components";
import { Logo } from "@/components/logo/Logo";
import { theme } from "@/assets/styles/Theme";

const { palette } = theme;

const FooterWrapper = styled.footer`
  background: ${palette.primary.main};
  padding: 20px;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Logo />
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
