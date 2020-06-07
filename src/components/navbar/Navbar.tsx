import React from "react";
import styled from "@emotion/styled";
import { useThemeContext, ThemedComponent, ColorThemes } from "../../App";
import Slider from "./Slider";
import { MediaQueryMap } from "../../MediaQueries";

const Wrapper = styled.div<ThemedComponent>`
  display: flex;
  align-items: center;
  min-height: 50px;
  height: 7vh;
  font-size: 1.8rem;
  width: 100%;
  background-color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#282c34") : ("#d3d6de")
  };
  ${MediaQueryMap.small} {
    font-size: 1.6rem;
  }
  ${MediaQueryMap.medium} {
    font-size: 1.4rem;
  }
  ${MediaQueryMap.standard} {
    font-size: 1.2rem;
  }
`;

const NavTitle = styled.p<ThemedComponent>`
  font-size: 1em;  
  font-family: 'Patua One', cursive;
  letter-spacing: 1.2px;
  padding: 0 4vw;
  white-space: nowrap;
  color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#e2e4e9") : ("#282c34")
  };
  ${MediaQueryMap.small} {
    font-size: 1.1em;
  }
  ${MediaQueryMap.standard} {
    font-size: 1.3em;
  }
`;

const NavLink = styled.a`
  display: inline-block;
  padding: 0 7px;
`;

const NavImage = styled.img`
  display: block;
  margin: auto;
  height: 32px;
  width: auto;
`;

const LinkContainer = styled.div`
  display: none;
  ${MediaQueryMap.small} {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 0 20px;
    height: 100%;
  }
`;

export default function Navbar() {
  const {colorTheme} = useThemeContext();
  return (
    <Wrapper colorTheme={colorTheme}>
      <NavTitle colorTheme={colorTheme}>Thomas Whiting</NavTitle>
      <LinkContainer>
        <NavLink href="mailto:TomppaFI@protonmail.com">
          <NavImage src="./Email-Icon.png" alt="Email link" />
        </NavLink>
        <NavLink href="https://github.com/Tomppa-FI">
          <NavImage src={
            colorTheme === ColorThemes.DARK ? "./Github-Mark-Light-32px.png" : "./Github-Mark-32px.png"
          } alt="GitHub Link"/>
        </NavLink>
        <NavLink href="https://www.linkedin.com/in/tom-whiting-bbbb491a0/">
          <NavImage src="./LI-In-Bug.png" alt="LinkedIn Link" />
        </NavLink>
      </LinkContainer>
      <Slider />
    </Wrapper>
  )
}