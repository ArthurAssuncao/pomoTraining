import React, { useContext, useEffect, useRef } from "react";
import type { Log } from "../../contexts";
import { LoggerContext } from "../../contexts";
import styles from "./Logger.module.scss";
import { LogItem } from "./LogItem";

const Logger = () => {
  const { logs } = useContext(LoggerContext);
  const el = useRef(null);

  useEffect(() => {
    if (el && el.current) {
      el.current.scrollTop = 0;
    }
  });

  return (
    logs.length > 0 && (
      <section className={styles.container} ref={el}>
        {logs.map((log: Log, index: number) => {
          return (
            <LogItem
              date={log.date}
              msg={log.msg}
              type={log.type}
              key={index}
            />
          );
        })}
      </section>
    )
  );
};

export { Logger };
