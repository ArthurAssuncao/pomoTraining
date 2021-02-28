import { useContext } from "react";
import closeIcon from "../../assets/img/icons/close.svg";
import { ChallengesContext } from "../../contexts";
import styles from "./LevelUpModal.module.scss";

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <section className={styles.container}>
        <header className={styles.header}>{level}</header>

        <strong className={styles.title}>Parabéns</strong>

        <p className={styles.description}>Você alcançou um novo level.</p>

        <button
          className={styles.button}
          type="button"
          onClick={closeLevelUpModal}
        >
          <img className={styles.buttonIcon} src={closeIcon} alt="Fechar" />
        </button>
      </section>
    </div>
  );
};

export { LevelUpModal };
