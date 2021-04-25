import { createContext, ReactNode, useState } from "react";

interface Log {
  date: Date;
  msg: string;
  type: "success" | "info" | "error";
}

interface LoggerContextData {
  logs: Array<Log>;
  addLog: (newLog: Log) => void;
}

interface LoggerProviderProps {
  maxLogs: number;
  children: ReactNode;
}

const LoggerContext = createContext({} as LoggerContextData);

const updateLocalStorage = (newLogs: Array<Log>) => {
  if (newLogs && process.browser) {
    localStorage.setItem("logs", JSON.stringify(newLogs));
  }
};

const LoggerProvider = ({ maxLogs, children }: LoggerProviderProps) => {
  const getLocalStorage = () => {
    const data = process.browser
      ? (JSON.parse(localStorage.getItem("logs")) as Array<Log>)
      : ([] as Array<Log>);
    return !data ? ([] as Array<Log>) : data;
  };
  const [logs, setLogs] = useState(getLocalStorage());

  const addLog = (newLog: Log) => {
    const newLogs = [newLog, ...logs];
    const newLogsSliced = newLogs.slice(0, maxLogs);
    updateLocalStorage(newLogsSliced);
    setLogs(newLogsSliced);
  };

  return (
    <LoggerContext.Provider
      value={{
        logs,
        addLog,
      }}
    >
      {children}
    </LoggerContext.Provider>
  );
};

export { LoggerContext, LoggerProvider };
export type { Log };
