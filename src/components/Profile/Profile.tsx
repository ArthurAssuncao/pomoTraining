import { useContext, useEffect } from "react";
import levelIcon from "../../assets/img/icons/level.svg";
import { ChallengesContext } from "../../contexts";
import { GithubApi, GithubUserData } from "../../services/GithubApi";
import styles from "./Profile.module.scss";

const Profile = () => {
  const { level, githubUsername, user, setUser } = useContext(
    ChallengesContext
  );

  useEffect(() => {
    if (!user) {
      fetchGithubUserData();
    }
  }, []);

  const fetchGithubUserData = async () => {
    const githubApi = GithubApi;
    const user: Promise<GithubUserData> = githubApi.user(githubUsername);
    setUser(await user);
  };

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
          <img className={styles.nameIcon} src={levelIcon} alt="Profile icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export { Profile };
