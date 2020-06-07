import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core"; 
import { ThemedComponent, ColorThemes, useThemeContext } from "../App";
import { MediaQueryMap } from "../MediaQueries";

const TypeIn = keyframes`
  from {
    max-width: 0%;
  }
  to {
    max-width: 100%;
  }
`;

const Blinker = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #FF652F;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  font-size: 1.5rem;
  margin-left: 4vw;
`;

const TitleContainer = styled.div`
  max-width: 20%;
`;

const Title = styled.h1<ThemedComponent>`
  font-family: 'Amatic SC', cursive;
  display: inline-block;
  padding-right: 2.5vw;
  border-right: 5px solid #FF652F;
  white-space: nowrap;
  overflow: hidden;
  width: auto;
  font-size: 2em;
  letter-spacing: 2px;
  animation: 
    ${TypeIn} 2s steps(50, end),
    ${Blinker} 1.2s step-end infinite;
  color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#282c34") : ("#e2e4e9") 
  };
  ${MediaQueryMap.medium} {
    font-size: 2.1em;
  }
  ${MediaQueryMap.standard} {
    font-size: 2.2em;
  }
`;

const Paragraph = styled.p<ThemedComponent>`
  max-width: 90%;
  font-family: 'Montserrat', sans-serif;
  font-size: .8em;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#282c34") : ("#e2e4e9") 
  };
  ${MediaQueryMap.small} {
    font-size: .9em;
    max-width: 80%;
  }
  ${MediaQueryMap.medium} {
    font-size: 1em;
    max-width: 70%;
  }
  ${MediaQueryMap.standard} {
    font-size: 1.1em;
    max-width: 60%;
  }
`;

export default function Heading() {
  const {colorTheme} = useThemeContext();
  return (
    <Wrapper>
      <TextContainer>
        <TitleContainer>
          <Title colorTheme={colorTheme}>Thomas Whiting</Title>
        </TitleContainer>
        <Paragraph colorTheme={colorTheme}>
          My name is Thomas Whiting, and I am a self-taught aspiring developer. I moved to Finland in October 2019 after falling in love with the country and it's culture, and now that I'm here, I hope to enhance the lives of people through the use of technology.
        </Paragraph>
      </TextContainer>
    </Wrapper>
  )
}