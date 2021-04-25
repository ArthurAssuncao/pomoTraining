import { useContext, useEffect, useState } from "react";
import { CountdownContext, Log, LoggerContext } from "../../contexts";
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

  const { addLog } = useContext(LoggerContext);

  const [percentToFinish, setPercentToFinish] = useState(100);
  const [minuteLeft, setMinuteLeft] = useState(
    String(maxMinutes).padStart(2, "0").split("")[0]
  );
  const [minuteRight, setMinuteRight] = useState(
    String(maxMinutes).padStart(2, "0").split("")[1]
  );
  const [secondLeft, setSecondLeft] = useState("0");
  const [secondRight, setSecondRight] = useState("0");

  const reset = () => {
    resetCountDown();
  };

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
    reset();
    updatePercentToFinish();
    startCountDown();

    const newLog = {
      date: new Date(),
      msg: "Contagem começou",
      type: "info",
    } as Log;
    addLog(newLog);
  };

  useEffect(() => {
    if (isActive) {
      updatePercentToFinish();
    }
  }, [seconds]);

  useEffect(() => {
    if (isActive) {
      const [minuteLeftAux, minuteRightAux] = String(minutes)
        .padStart(2, "0")
        .split("");
      const [secondLeftAux, secondRightAux] = String(seconds)
        .padStart(2, "0")
        .split("");
      setMinuteLeft(minuteLeftAux);
      setMinuteRight(minuteRightAux);
      setSecondLeft(secondLeftAux);
      setSecondRight(secondRightAux);
    } else {
      const [minuteLeftAux, minuteRightAux] = String(maxMinutes)
        .padStart(2, "0")
        .split("");
      const [secondLeftAux, secondRightAux] = String(0)
        .padStart(2, "0")
        .split("");
      setMinuteLeft(minuteLeftAux);
      setMinuteRight(minuteRightAux);
      setSecondLeft(secondLeftAux);
      setSecondRight(secondRightAux);
    }
  }, [seconds]);

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
              onClick={reset}
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
