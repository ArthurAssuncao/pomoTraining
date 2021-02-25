import level from "../../assets/img/icons/level.svg";
import styles from "./Profile.module.scss";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/arthurassuncao.png" alt="Profile" />
      <div>
        <strong>Arthur Assuncao</strong>
        <p>
          <img src={level} alt="Profile icon" />
          Level 1
        </p>
      </div>
    </div>
  );
}
