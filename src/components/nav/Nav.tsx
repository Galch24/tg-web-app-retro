import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme, media } from "@/assets/styles/Theme";
import { navData } from "@/data/nav";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/store/slices/mobileMenuSlice";
import {useWindowSize} from "@/hooks/useWindowSize";
import { useSearchParams } from "react-router-dom";
import {getQueryParams, scrollToBlock} from "@/shared/lib/utils";

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

export const LinkStyled = styled('a')`
  color: ${theme.palette.common.white};
  font-size: 18px;
`;

type NavProps = {
  onNavClick?: () => void
}

const Nav = ({ onNavClick }: NavProps) => {
  const dispatch = useDispatch()
  const { windowWidth, desktopWidth } = useWindowSize()
  const [searchParams] = useSearchParams()
  const query = getQueryParams()
  console.log('---- searchParams = ', searchParams)
  console.log('---- query = ', query)
  // const router = useRouter();
  const pathname = window.location.hash ? window.location.hash.replace('#', '') : '/'
  console.log('---- pathname = ', pathname)
  const isMainPage = pathname === "/"
  return (
    <ListStyled>
      {navData.map(link => (
        <ItemStyled key={link.id}>
          <LinkStyled
            href={`#${link.id}`}
            onClick={() => {
              dispatch(toggleMenu());

              const offset = desktopWidth
                ? link.offset !== undefined
                  ? link.offset
                  : 20
                : link.offsetMobile !== undefined
                  ? link.offsetMobile
                  : 60;

              if (isMainPage) {
                scrollToBlock(`block-${link.id}`, offset);
              } else {
                // router.push(`/`);
              }
              onNavClick()
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
