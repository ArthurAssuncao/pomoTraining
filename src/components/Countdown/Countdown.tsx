import { useEffect, useState } from "react";
import styles from "./Countdown.module.scss";

export function CountDown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  const startCountDown = () => {
    setActive(true);
  };

  return (
    <div className={styles.countDownContainer}>
      <div className={styles.countDownTime}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.countDownButton}
        onClick={startCountDown}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}
