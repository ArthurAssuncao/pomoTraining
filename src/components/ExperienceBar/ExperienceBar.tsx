import { useContext } from "react";
import Level from "../../assets/img/icons/level.svg";
import { ChallengesContext } from "../../contexts";
import { Tooltip } from "../Tooltip";
import styles from "./ExperienceBar.module.scss";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    currentExperience > 0
      ? Math.round(currentExperience * 100) / experienceToNextLevel()
      : 0;

  return (
    <section className={styles.container}>
      <span className={styles.initialExperience}>0 xp</span>
      <div className={styles.bar}>
        <div
          className={styles.barFill}
          style={{ width: `${percentToNextLevel}%` }}
        ></div>
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          <Tooltip>
            <div>
              <Level />
            </div>
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
