import { useContext } from "react";
import { ChallengesContext } from "../../contexts";
import styles from "./CompleteChallenges.module.scss";

const CompleteChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <span className={styles.label}>Desafios completos</span>
      <span className={styles.value}>{challengesCompleted}</span>
    </div>
  );
};

export { CompleteChallenges };
