import HomeIcon from "../../assets/img/icons/home-outlined.svg";
import LogoIcon from "../../assets/img/icons/pomoTraining-icon.svg";
import SettingsIcon from "../../assets/img/icons/settings-solid.svg";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  handleClickHome: () => void;
  handleClickConfig: () => void;
}

const NavBar = (props: NavBarProps) => {
  const { handleClickHome, handleClickConfig } = props;

  return (
    <nav className={styles.container}>
      <div className={styles.appIconContainer}>
        <div>
          <LogoIcon />
        </div>
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.menuIconWrapper}>
          <div className={styles.menuIcon} onClick={handleClickHome}>
            <HomeIcon />
          </div>
        </div>
        <div className={styles.menuIconWrapper}>
          <div className={styles.menuIcon} onClick={handleClickConfig}>
            <SettingsIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
