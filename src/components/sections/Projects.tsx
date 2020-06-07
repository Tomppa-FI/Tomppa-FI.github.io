import React from "react";
import styled from "@emotion/styled";
import { useThemeContext, ThemedComponent, ColorThemes } from "../../App";
import { MediaQueryMap } from "../../MediaQueries";

const Wrapper = styled.div<ThemedComponent>`
  padding: 6vh 4vw;
  background-color: #C8C8C8;
  font-size: 1rem;
`;
const Title = styled.h1<ThemedComponent>`
  text-align: center;
  color: #282c34;
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Project = styled.div<ThemedComponent>`
  background-color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#282c34") : ("#d3d6de")
  };
  width: 96%;
  margin: 2%;
  padding: 2%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${MediaQueryMap.medium} {
    width: 46%;
  }
  ${MediaQueryMap.standard} {
    width: 29%;
  }
`;

const ProjectLink = styled.a<ThemedComponent>`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  padding: 2vh;
  color: #282c34;
  font-size: 1.5em;
  text-decoration: none;
  color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#e2e4e9") : ("#282c34") 
  };
`;

const ProjectDesc = styled.p<ThemedComponent>`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  padding: 2vh 4%;
  font-size: 1.2em;
  color: ${props => props.colorTheme === ColorThemes.DARK ? 
    ("#e2e4e9") : ("#282c34") 
  };
`;

const ProjectTechnologies = styled.div`
  display: flex;
  padding: 2vh 0;
`;

const TechnologyIcon = styled.img`
  display: block;
  margin: auto;
  height: auto;
  padding: 0 16px;
  width: 100px;
`;

export default function Projects() {
  const { colorTheme } = useThemeContext();
  return (
    <Wrapper colorTheme={colorTheme}>
      <Title colorTheme={colorTheme}>My Recent Projects</Title>
      <ProjectsContainer>
        <Project colorTheme={colorTheme}>
          <ProjectLink href="https://enigmatic-peak-53768.herokuapp.com/" colorTheme={colorTheme}>Tico's Quest <i className="fas fa-external-link-alt" style={{color: `#FF652F`}}></i></ProjectLink>
          <ProjectDesc colorTheme={colorTheme}>
            Tico's Quest is a Zelda-Inspired Browser game utilizing React.
            Tico must navigate a dangerous maze, collecting coins, and avoiding monsters until he reaches his bone.
          </ProjectDesc>
          <ProjectDesc colorTheme={colorTheme}>
            I thoroughly enjoyed building it, and the challenges I overcame helped me with my React knowledge.
          </ProjectDesc>
          <ProjectTechnologies>
            <TechnologyIcon src="./Icons/JSLogo.png" alt="JavaScript icon" />
            <TechnologyIcon src="./Icons/ReactLogo.png" alt="React icon" />
          </ProjectTechnologies>
        </Project>
        <Project colorTheme={colorTheme}>
          <ProjectLink href="https://tmijeminahovi.fi" colorTheme={colorTheme}>TMI Jemina Hovi <i className="fas fa-external-link-alt" style={{color: `#FF652F`}}></i></ProjectLink>
          <ProjectDesc colorTheme={colorTheme}>
            This was the first project I built that I felt truly had purpose. My Girlfriend has her own business as a beautician,
            and her original website was built using WordPress. Since it lacked some features she otherwise requested, I took it upon myself to build her a custom website.
          </ProjectDesc>
          <ProjectDesc colorTheme={colorTheme}>
            This is currently deployed on AWS, using CloudFront to serve the page over HTTPS.
          </ProjectDesc>
          <ProjectTechnologies>
            <TechnologyIcon src="./Icons/JSLogo.png" alt="JavaScript icon" />
          </ProjectTechnologies>
        </Project>
        <Project colorTheme={colorTheme}>
          <ProjectLink href="https://Tomppa-FI.Github.io" colorTheme={colorTheme}>This Portfolio <i className="fas fa-external-link-alt" style={{color: `#FF652F`}}></i></ProjectLink>
          <ProjectDesc colorTheme={colorTheme}>
            This page is a replacement for my previous portfolio. I initially had a static page, but as I built more projects I felt like using React would allow me to manage elements easier.
          </ProjectDesc>
          <ProjectDesc colorTheme={colorTheme}>
            This is deployed on Github pages, though I plan to migrate it to AWS in future.
          </ProjectDesc>
          <ProjectTechnologies>
            <TechnologyIcon src="./Icons/JSLogo.png" alt="JavaScript icon" />
            <TechnologyIcon src="./Icons/TSLogo.png" alt="TypeScript icon" />
            <TechnologyIcon src="./Icons/ReactLogo.png" alt="React icon" />
          </ProjectTechnologies>
        </Project>
      </ProjectsContainer>
    </Wrapper>
  )
}