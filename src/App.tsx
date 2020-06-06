import React, { useState, useContext } from "react";
import Header from "./components/Header";

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
  const [colorTheme, setColorTheme] = useState(ColorThemes.LIGHT);

  return (
    <ThemeContextImpl.Provider value={{colorTheme, setColorTheme}}>
      <Header />
    </ThemeContextImpl.Provider>
  )
}