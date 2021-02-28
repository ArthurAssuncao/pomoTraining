import { useContext } from "react";
import level from "../../assets/img/icons/level.svg";
import { ChallengesContext } from "../../contexts";
import { Tooltip } from "../Tooltip";
import styles from "./ExperienceBar.module.scss";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percenteToNextLevel =
    currentExperience > 0
      ? Math.round(currentExperience * 100) / experienceToNextLevel()
      : 0;

  return (
    <section className={styles.container}>
      <span className={styles.initialExperience}>0 xp</span>
      <div className={styles.bar}>
        <div
          className={styles.barFill}
          style={{ width: `${percenteToNextLevel}%` }}
        ></div>
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
      <span className={styles.targetExperience}>
        {experienceToNextLevel()} xp
      </span>
    </section>
  );
};

export { ExperienceBar };
