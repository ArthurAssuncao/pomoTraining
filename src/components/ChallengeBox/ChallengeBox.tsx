import { useState } from "react";
import body from "../../assets/img/icons/body.svg";
import levelUP from "../../assets/img/icons/level-up.svg";
import styles from "./ChallengeBox.module.scss";

export function ChallengeBox() {
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true);

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <section className={styles.challengeBoxActive}>
          <header>Ganhe 400 xp</header>

          <article className={styles.challengeBoxContent}>
            <img src={body} alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </article>

          <footer>
            <button type="button" className={styles.challengeBoxFailedButton}>
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
            <img src={levelUP} alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
