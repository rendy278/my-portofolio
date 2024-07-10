import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(() => {
    return JSON.parse(localStorage.getItem("isNightMode")) || false;
  });

  useEffect(() => {
    localStorage.setItem("isNightMode", JSON.stringify(isNightMode));
    document.documentElement.classList.toggle("dark", isNightMode);
  }, [isNightMode]);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
