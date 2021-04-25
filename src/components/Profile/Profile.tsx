import { useContext } from "react";
import LevelIcon from "../../assets/img/icons/level.svg";
import { ChallengesContext } from "../../contexts";
import styles from "./Profile.module.scss";

const Profile = () => {
  const { level, githubUsername, user } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <img
        className={styles.photo}
        src={user?.profilePhoto ?? `https://github.com/${githubUsername}.png`}
        alt="Profile"
      />
      <div className={styles.nameContainer}>
        <strong className={styles.name}>{user?.name ?? githubUsername}</strong>
        <p className={styles.nameIconWrapper}>
          <div className={styles.nameIcon}>
            <LevelIcon />
          </div>
          <div>Level {level}</div>
        </p>
      </div>
    </div>
  );
};

export { Profile };
