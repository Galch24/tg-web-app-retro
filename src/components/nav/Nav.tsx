import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme, media } from "@/assets/styles/Theme";
import { navData } from "@/data/nav";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/store/slices/mobileMenuSlice";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useSearchParams } from "react-router-dom";
import { getQueryParams, scrollToBlock } from "@/shared/lib/utils";

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  list-style: none;
  margin-top: 160px;

  ${media.tablet} {
    flex-direction: row;
    margin: 0;
  }
`;

export const ItemStyled = styled.li`
  display: flex;
  list-style: none;
`;

export const LinkStyled = styled("a")`
  color: ${theme.palette.common.white};
  font-size: 18px;
`;

type NavProps = {
  onNavClick?: () => void;
};

const Nav = ({ onNavClick }: NavProps) => {
  const dispatch = useDispatch();
  const { windowWidth, desktopWidth } = useWindowSize();

  return (
    <ListStyled>
      {navData.map(link => (
        <ItemStyled key={link.id}>
          <LinkStyled
            href={`#${link.id}`}
            onClick={() => {
              dispatch(toggleMenu());
              scrollToBlock(`block-${link.id}`, 20);
            }}
          >
            {link.label}
          </LinkStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default Nav;
