import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
`;

const StyledLI = styled.li`
  display: flex;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: inherit;
  text-align: center;
  padding: 20px 0;
  background-color: #e8479b;
  color: white;
  font-size: 1.4rem;
  &:hover {
    background-color: #17f1b3;
  }
`;

export default function Navigation() {
  return (
    <StyledNav>
      <StyledList>
        <StyledLI>
          <StyledLink href="/">Spotlight</StyledLink>
        </StyledLI>
        <StyledLI>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </StyledLI>
        <StyledLI>
          <StyledLink href="/">Favorites</StyledLink>
        </StyledLI>
      </StyledList>
    </StyledNav>
  );
}
