import Cookies from "js-cookie";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContext";
interface CountdownContextData {
  maxMinutes: number;
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
  setMaxMinutes: (value: number) => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData);

const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [maxMinutes, setMaxMinutesPrivate] = useState(
    Cookies.get("maxMinutes") && !isNaN(Number(Cookies.get("maxMinutes")))
      ? Number(Cookies.get("maxMinutes"))
      : 25
  );
  const calcTime = (newTime: number) => {
    return newTime * 60;
  };
  const defaultTime = () => {
    return calcTime(maxMinutes);
  };
  const [time, setTime] = useState(defaultTime());
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  let countDownTimeout: NodeJS.Timeout;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  useEffect(() => {
    Cookies.set("maxMinutes", String(maxMinutes));
  }, [maxMinutes]);

  const startCountDown = () => {
    setIsActive(true);
  };

  const resetCountDown = () => {
    if (countDownTimeout) {
      clearTimeout(countDownTimeout);
    }
    setIsActive(false);
    setHasFinished(false);
    setTime(defaultTime());
  };

  const setMaxMinutes = (newMinutes: number) => {
    if (newMinutes > 0) {
      setMaxMinutesPrivate(newMinutes);
      setTime(calcTime(maxMinutes));
      resetCountDown();
    }
  };

  return (
    <CountdownContext.Provider
      value={{
        maxMinutes,
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
        setMaxMinutes,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export { CountdownContext, CountdownProvider };
