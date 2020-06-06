import React from "react";
import styled from "@emotion/styled/macro";
import { useThemeContext, ColorThemes, ThemedComponent } from "../../App";
import { MediaQueryMap } from "../../MediaQueries";

const SliderContainer = styled.div`
  height: auto;
  width: auto;
  margin-left: auto;
  padding: 0 15px;
  ${MediaQueryMap.small} {
    margin: 0;
  }
`;

const SliderLabel = styled.label`
  display: block;
  width: 60px;
  height: 32px;
  position: relative;
  background: gray;
  border-radius: 25px;
  transition: background-color 0.3s linear;
  &:after {
    transition: transform 0.2s linear;
    position: absolute;
    top: 6px;
    left: 6px;
    display: block;
    content: "";
    background: white;
    border-radius: 15px;
    width: 20px;
    height: 20px;
  }
`;
const SliderInput = styled.input`
  display: none;
  &:checked + ${SliderLabel} {
    background-color: lightblue;
    &:after {
      transform: translateX(28px);
    }
  }
`;

export default function Slider() {
  const {colorTheme, setColorTheme} = useThemeContext();
  
  const handleChange = () => {
    setColorTheme((prevTheme) => (
      prevTheme === ColorThemes.DARK ? ColorThemes.LIGHT : ColorThemes.DARK
    ));
  }

  return (
    <SliderContainer>
      <SliderInput type="checkbox" id="SliderInput" onChange={handleChange} />
      <SliderLabel htmlFor="SliderInput" />
    </SliderContainer>
  )
}