import Cookies from "js-cookie";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as workerTimers from "worker-timers";
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
  timeSinceInitTime: () => TimeCountdown;
}

interface CountdownProviderProps {
  children: ReactNode;
}

interface TimeCountdown {
  time: number;
  minutes: number;
  seconds: number;
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
  const [initTime, setInitTime] = useState(null);
  const [minutes, setMinutes] = useState(maxMinutes);
  const [seconds, setSeconds] = useState(0);

  const timeSinceInitTime = () => {
    if (initTime == null) {
      return {
        time: maxMinutes,
        minutes: maxMinutes,
        seconds: 0,
      };
    }
    const now = performance ? performance.now() : Date.now();
    const distance = now - initTime;
    const minutes =
      maxMinutes - 1 - Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = 60 - 1 - Math.floor((distance % (1000 * 60)) / 1000);
    return {
      time: distance,
      minutes: minutes,
      seconds: seconds,
    };
  };

  let countDownTimeout: number;

  useEffect(() => {
    const times = timeSinceInitTime();

    if (isActive && time > 0 && times.minutes >= 0) {
      countDownTimeout = workerTimers.setTimeout(() => {
        if (isActive) {
          setTime(time - 1);

          setMinutes(times.minutes);
          setSeconds(times.seconds);
        }
      }, 1000);
    } else if (
      isActive &&
      (time === 0 ||
        (times.minutes === 0 && times.seconds <= 0) ||
        times.minutes < 0)
    ) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
      setSeconds(0); // it's probably that finish after 0. "Gambiarra" is better than add seconds in useEffect
    }
  }, [isActive, time]);

  useEffect(() => {
    Cookies.set("maxMinutes", String(maxMinutes));
    if (!isActive) {
      setMinutes(maxMinutes);
      setSeconds(0);
    }
  }, [maxMinutes]);

  const startCountDown = () => {
    setIsActive(true);
    setInitTime(performance ? performance.now() : Date.now());
  };

  const resetCountDown = () => {
    setIsActive(false);
    setHasFinished(false);
    setTime(defaultTime());
    setInitTime(null);
    setMinutes(maxMinutes);
    setSeconds(0);
    if (countDownTimeout) {
      workerTimers.clearTimeout(countDownTimeout);
    }
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
        timeSinceInitTime,
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
