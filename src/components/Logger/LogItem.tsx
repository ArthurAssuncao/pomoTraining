import { format } from "date-fns";
import { CSSProperties } from "react";
import TimeIcon from "../../assets/img/icons/bx-time.svg";
import type { Log } from "../../contexts";
import styles from "./LogItem.module.scss";

const LogItem = (props: Log) => {
  const { date, msg, type } = props;
  const formatedDate = format(new Date(date), "dd/MM/yyyy HH:mm:ss");

  const iconColors = {
    success: {
      "--iconColor": "var(--green)",
    } as CSSProperties,
    info: { "--iconColor": "var(--blue-twitter)" } as CSSProperties,
    error: { "--iconColor": "var(--red)" } as CSSProperties,
  };

  const iconColor = iconColors[type];

  return (
    <div className={styles.container} style={iconColor}>
      <div className={styles.msgWrapper}>
        <div className={styles.dateIcon}>
          <TimeIcon />
        </div>
        <span className={styles.date}>{formatedDate}</span>
        <hr className={styles.line}></hr>
        <span className={styles.msg}>{msg}</span>
        <hr className={styles.line}></hr>
      </div>
    </div>
  );
};

export { LogItem };
