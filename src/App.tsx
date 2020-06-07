import React, { useState, useContext } from "react";
import Header from "./components/Header";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";

export enum ColorThemes {
  DARK,
  LIGHT
}

interface ThemeContext {
  colorTheme: ColorThemes,
  setColorTheme: React.Dispatch<React.SetStateAction<ColorThemes>>
}

const ThemeContextImpl = React.createContext<ThemeContext | undefined>(undefined);
export const useThemeContext = () => useContext(ThemeContextImpl)!;

export interface ThemedComponent {
  colorTheme: ColorThemes
}


export default function App() {
  const [colorTheme, setColorTheme] = useState(ColorThemes.DARK);

  return (
    <ThemeContextImpl.Provider value={{colorTheme, setColorTheme}}>
      <Header />
      <AboutMe />
      <Projects />
    </ThemeContextImpl.Provider>
  )
}