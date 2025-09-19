// src/theme/ThemeContext.js
import { createContext, useContext, useState } from 'react';
import colors from './color';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeColors, setThemeColors] = useState(colors);
  return (
    <ThemeContext.Provider value={{ themeColors, setThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
