import { useContext } from "react";
import closeIcon from "../../assets/img/icons/close.svg";
import { ChallengesContext } from "../../contexts";
import styles from "./LevelUpModal.module.scss";

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <section className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>

        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src={closeIcon} alt="Fechar" />
        </button>
      </section>
    </div>
  );
};

export { LevelUpModal };
