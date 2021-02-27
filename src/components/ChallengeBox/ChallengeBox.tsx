import { useContext } from "react";
import body from "../../assets/img/icons/body.svg";
import eye from "../../assets/img/icons/eye.svg";
import levelUP from "../../assets/img/icons/level-up.svg";
import { ChallengesContext, CountdownContext } from "../../contexts";
import styles from "./ChallengeBox.module.scss";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountDown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountDown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountDown();
  };

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
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeBoxSucceededButton}
              onClick={handleChallengeSucceeded}
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
