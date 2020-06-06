import React from "react";
import styled from "@emotion/styled";
import { useThemeContext, ThemedComponent, ColorThemes } from "../../App";

const Wrapper = styled.div<ThemedComponent>`
  display: flex;
  align-items: center;
  min-height: 50px;
  height: 7vh;
  width: 100%;
  background-color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#282c34") : ("#e2e4e9")
  };
`;

const NavTitle = styled.p<ThemedComponent>`
  font-size: 1.3em;  
  font-family: 'Patua One', cursive;
  letter-spacing: 1.2px;
  padding: 0 45px;
  color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#e2e4e9") : ("#282c34")
  };
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
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 100%;
  padding: 0 20px;
`;

export default function Navbar() {
  const {colorTheme, setColorTheme} = useThemeContext();
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
    </Wrapper>
  )
}