import { useEffect, useState } from "react";
import styles from "./ThemeContext.module.scss";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={() => setTheme(nextTheme)} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export { ThemeToggler };
