import { useContext } from "react";
import level from "../../assets/img/icons/level.svg";
import { ChallengesContext } from "../../contexts";
import { Tooltip } from "../Tooltip";
import styles from "./ExperienceBar.module.scss";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percenteToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel()
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percenteToNextLevel}%` }}></div>
        <span
          className={styles.currentExperience}
          style={{ left: `${percenteToNextLevel}%` }}
        >
          <Tooltip>
            <img src={level} alt="{percenteToNextLevel} xp" />
            <p>{currentExperience} xp</p>
          </Tooltip>
        </span>
      </div>
      <span>{experienceToNextLevel()} xp</span>
    </header>
  );
}
