import React, { useState, useMemo, useCallback } from "react";

import Header from "components/layouts/Header/Header";
import Content from "components/layouts/Content/Content";
import Footer from "components/layouts/Footer/Footer";
import { ThemeContext } from "store/contexts/theme";

import styles from "./App.module.scss";

const App = () => {
  const [themeColor, setThemeColor] = useState("");

  const themeToggle = useCallback((changeColor) => {
    setThemeColor(changeColor);
  }, []);

  const contextValue = useMemo(
    () => ({
      theme: themeColor,
      toggleTheme: themeToggle,
    }),
    [themeColor, themeToggle]
  );

  return (
    <div className={styles.App}>
      <ThemeContext.Provider value={contextValue}>
        <Header/>
        <Content />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};
export default App;
