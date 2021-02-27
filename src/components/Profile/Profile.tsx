import { useContext } from "react";
import levelIcon from "../../assets/img/icons/level.svg";
import { ChallengesContext } from "../../contexts";
import styles from "./Profile.module.scss";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/arthurassuncao.png" alt="Profile" />
      <div>
        <strong>Arthur Assuncao</strong>
        <p>
          <img src={levelIcon} alt="Profile icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
