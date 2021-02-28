import { useContext } from "react";
import levelIcon from "../../assets/img/icons/level.svg";
import { ChallengesContext } from "../../contexts";
import styles from "./Profile.module.scss";

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.container}>
      <img
        className={styles.photo}
        src="https://github.com/arthurassuncao.png"
        alt="Profile"
      />
      <div className={styles.nameContainer}>
        <strong className={styles.name}>Arthur Assuncao</strong>
        <p className={styles.nameIconWrapper}>
          <img className={styles.nameIcon} src={levelIcon} alt="Profile icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export { Profile };
