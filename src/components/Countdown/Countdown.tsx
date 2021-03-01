import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../../contexts";
import styles from "./Countdown.module.scss";

const CountDown = () => {
  const {
    maxMinutes,
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountDown,
    resetCountDown,
  } = useContext(CountdownContext);

  const [percentToFinish, setPercentToFinish] = useState(100);

  const updatePercentToFinish = () => {
    const percUnit = (maxMinutes * 60) / 100;
    let newPercentToFinish =
      100 - Math.floor((minutes * 60 + seconds) / percUnit);
    if (newPercentToFinish > 100) {
      newPercentToFinish = 100;
    }
    setPercentToFinish(newPercentToFinish);
  };

  const startCountDownAndResetBar = () => {
    updatePercentToFinish();
    startCountDown();
  };

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        updatePercentToFinish();
      }, 1000 * 30);
    }
  }, [percentToFinish]);

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
              <span
                className={styles.buttonIsActivePercBar}
                style={{ width: `${percentToFinish}%` }}
              ></span>
            </button>
          ) : (
            <button
              type="button"
              className={styles.button}
              onClick={startCountDownAndResetBar}
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
