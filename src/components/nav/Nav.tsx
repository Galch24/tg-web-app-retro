import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme, media } from "@/assets/styles/Theme";
import { navData } from "@/data/nav";

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  list-style: none;

  ${media.tablet} {
    flex-direction: row;
  }
`;

export const ItemStyled = styled.li`
  display: flex;
  list-style: none;
`;

export const LinkStyled = styled(Link)`
  color: ${theme.palette.common.white};
  font-size: 18px;
`;

const Nav = () => {
  return (
    <ListStyled>
      {navData.map((link, index) => (
        <ItemStyled key={index}>
          <LinkStyled to={link.path}>{link.label}</LinkStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default Nav;
