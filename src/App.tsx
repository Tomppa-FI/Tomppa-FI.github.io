import React, { useState, useContext } from "react";

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

export default function App() {
  const [colorTheme, setColorTheme] = useState(ColorThemes.LIGHT);

  return (
    <ThemeContextImpl.Provider value={{colorTheme, setColorTheme}}>
      <div>Hello</div>
    </ThemeContextImpl.Provider>
  )
}