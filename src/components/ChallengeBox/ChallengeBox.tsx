import { useContext } from "react";
import body from "../../assets/img/icons/body.svg";
import eye from "../../assets/img/icons/eye.svg";
import levelUP from "../../assets/img/icons/level-up.svg";
import { ChallengesContext, CountdownContext } from "../../contexts";
import styles from "./ChallengeBox.module.scss";

const ChallengeBox = () => {
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
    <div className={styles.container}>
      {activeChallenge ? (
        <section className={styles.active}>
          <header className={styles.header}>
            Ganhe {activeChallenge.amount} xp
          </header>

          <article className={styles.content}>
            {activeChallenge.type === "body" && <img src={body} alt="" />}
            {activeChallenge.type === "eye" && <img src={eye} alt="" />}
            <strong className={styles.contentTitle}>Novo desafio</strong>
            <p className={styles.contentDescription}>
              {activeChallenge.description}
            </p>
          </article>

          <footer className={styles.footer}>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonFailed}`}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonSucceeded}`}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </section>
      ) : (
        <div className={styles.notActive}>
          <article className={styles.content}>
            <strong className={styles.contentTitle}>
              Finalize um ciclo para receber desafios a serem completados
            </strong>
            <p className={styles.contentDescription}>
              <img
                src={levelUP}
                alt="Level Up"
                className={`${styles.contentIcon} ${styles.iconAnimation}`}
              />
              Avance de level completando desafios
            </p>
          </article>
        </div>
      )}
    </div>
  );
};

export { ChallengeBox };
