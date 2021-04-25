import { useContext, useState } from "react";
import BodyIcon from "../../assets/img/icons/body.svg";
import LevelUP from "../../assets/img/icons/level-up.svg";
import {
  ChallengesContext,
  CountdownContext,
  Log,
  LoggerContext,
} from "../../contexts";
import styles from "./ChallengeBox.module.scss";

const ChallengeBox = () => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
    nextChallenge,
    numberChallengesPerCicle,
  } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountdownContext);
  const { addLog } = useContext(LoggerContext);

  const [challengesCicle, setChallengesCicle] = useState(0);

  const handleChallengeNext = () => {
    nextChallenge();
    const newLog = {
      date: new Date(),
      msg: "Novo desafio",
      type: "info",
    } as Log;
    addLog(newLog);
  };

  const handleChallengeSucceeded = () => {
    completeChallenge();
    setChallengesCicle(challengesCicle + 1);
    if (challengesCicle < numberChallengesPerCicle) {
      nextChallenge();
      return;
    }
    resetCountDown();
    setChallengesCicle(0);

    const newLog = {
      date: new Date(),
      msg: "Desafio concluído",
      type: "success",
    } as Log;
    addLog(newLog);
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountDown();
    setChallengesCicle(0);

    const newLog = {
      date: new Date(),
      msg: "Desafio não realizado",
      type: "error",
    } as Log;
    addLog(newLog);
  };

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <section className={styles.active}>
          <header className={styles.header}>
            Ganhe {activeChallenge.amount} xp
          </header>

          <article className={styles.content}>
            <strong className={styles.contentTitle}>Novo desafio</strong>
            <div className={styles.contentImageWrapper}>
              <img
                src={activeChallenge.image.url}
                alt={activeChallenge.description}
                className={styles.contentImage}
              />
              <span className={styles.contentImageCopyright}>
                Fonte: {activeChallenge.image.copyright}
              </span>
            </div>

            <p className={styles.contentDescription}>
              {activeChallenge.description}
            </p>
            <p className={styles.contentHowDo}>
              <div className={styles.contentHowDoIcon}>
                <BodyIcon />
              </div>
              <span className={styles.contentHowDoMsg}>
                {activeChallenge.howDo}
              </span>
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
              className={`${styles.button} ${styles.buttonNext}`}
              onClick={handleChallengeNext}
            >
              Pular
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
              <div className={`${styles.contentIcon} ${styles.iconAnimation}`}>
                <LevelUP />
              </div>
              Avance de level completando desafios
            </p>
          </article>
        </div>
      )}
    </div>
  );
};

export { ChallengeBox };
