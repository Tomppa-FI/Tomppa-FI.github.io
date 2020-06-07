import React from "react";
import styled from "@emotion/styled";
import { useThemeContext, ThemedComponent, ColorThemes } from "../../App";

const Wrapper = styled.div<ThemedComponent>`
  padding: 6vh 4vw;
  background-color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#282c34") : ("#d3d6de")
  };
  font-size: 1rem;
`;
const Title = styled.h1<ThemedComponent>`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#e2e4e9") : ("#282c34") 
  };
  font-size: 2em;
`;

const Paragraph = styled.p<ThemedComponent>`
  font-family: "Montserrat", sans-serif;
  padding: 2vh 8vw;
  color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#e2e4e9") : ("#282c34") 
  };
  font-size: 1.5em;
`;
export default function AboutMe() {
  const {colorTheme} = useThemeContext();
  return (
    <Wrapper colorTheme={colorTheme}>
      <Title colorTheme={colorTheme}>Hi, I'm Tom. Good to meet you!</Title>
      <Paragraph colorTheme={colorTheme}>
        My journey towards becoming a full-stack developer began in 2017.
        I had always been passionate about development, as I had practiced with it when I was younger,
        and the timing felt right and I transitioned from IT Technician to development.
        I began by following the Open Course provided by the University of Helsinki in Object Orientated Programming,
        followed by Colt Steele's course in Web Development. I am proficient with Java, Python, JavaScript, TypeScript and React, 
        and I am constantly on the lookout for new technologies.
      </Paragraph>

      <Paragraph colorTheme={colorTheme}>
        Nowadays you can find me working on my own Projects, primarily using React. I am highly motivated, 
        and ready for a challenge, and I hope to join a professional team where I can contribute my skills to projects, 
        and enhance my own knowledge and capabilities. I am always open to try any new technologies, and to learn new things.
        I hope to hear from you soon!
      </Paragraph>
    </Wrapper>
  )
}