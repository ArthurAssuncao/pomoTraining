import { useContext, useState } from "react";
import bodyIcon from "../../assets/img/icons/body.svg";
import levelUP from "../../assets/img/icons/level-up.svg";
import { ChallengesContext, CountdownContext } from "../../contexts";
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
  const [challegesCicle, setChallegesCicle] = useState(0);

  const handleChallengeNext = () => {
    nextChallenge();
  };

  const handleChallengeSucceeded = () => {
    completeChallenge();
    setChallegesCicle(challegesCicle + 1);
    if (challegesCicle < numberChallengesPerCicle) {
      nextChallenge();
      return;
    }
    resetCountDown();
    setChallegesCicle(0);
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountDown();
    setChallegesCicle(0);
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
              <img
                src={bodyIcon}
                alt="Como fazer"
                className={styles.contentHowDoIcon}
              />
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
