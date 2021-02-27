import { useContext } from "react";
import body from "../../assets/img/icons/body.svg";
import eye from "../../assets/img/icons/eye.svg";
import levelUP from "../../assets/img/icons/level-up.svg";
import { ChallengesContext } from "../../contexts";
import styles from "./ChallengeBox.module.scss";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <section className={styles.challengeBoxActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <article className={styles.challengeBoxContent}>
            {activeChallenge.type === "body" && <img src={body} alt="" />}
            {activeChallenge.type === "eye" && <img src={eye} alt="" />}
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </article>

          <footer>
            <button
              type="button"
              className={styles.challengeBoxFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeBoxSucceededButton}
            >
              Completei
            </button>
          </footer>
        </section>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>
            Finalize um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img
              src={levelUP}
              alt="Level Up"
              className={styles.challengeBoxIconAnimation}
            />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
