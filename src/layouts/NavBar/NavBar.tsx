import homeIcon from "../../assets/img/icons/home-outlined.svg";
import logoIcon from "../../assets/img/icons/pomoTraining-icon.svg";
import settingsIcon from "../../assets/img/icons/settings-solid.svg";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.appIconContainer}>
        <img src={logoIcon} alt="Logo" />
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.menuIconWrapper}>
          <img className={styles.menuIcon} src={homeIcon} alt="home icon" />
        </div>
        <div className={styles.menuIconWrapper}>
          <img
            className={styles.menuIcon}
            src={settingsIcon}
            alt="settings icon"
          />
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
