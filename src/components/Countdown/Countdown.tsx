import { useContext } from "react";
import { CountdownContext } from "../../contexts";
import styles from "./Countdown.module.scss";

const CountDown = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountDown,
    resetCountDown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <div className={styles.timeUnitContainer}>
          <span className={styles.timeUnit}>{minuteLeft}</span>
          <span className={styles.timeUnit}>{minuteRight}</span>
        </div>
        <span className={styles.timeUnitSeparator}>:</span>
        <div className={styles.timeUnitContainer}>
          <span className={styles.timeUnit}>{secondLeft}</span>
          <span className={styles.timeUnit}>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.button}>
          Ciclo encerrado
          <i className={styles.buttonIconFinished}>&#10003;</i>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.button} ${styles.isActive}`}
              onClick={resetCountDown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.button}
              onClick={startCountDown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};

export { CountDown };
