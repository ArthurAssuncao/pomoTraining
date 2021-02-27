import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../assets/data/challenges.json";
import notificationIcon from "../assets/img/icons/level.svg";
import notificationAudio from "../assets/sound/notification.mp3";

interface Challenge {
  type: string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: () => number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

const ChallengesContext = createContext({} as ChallengesContextData);

function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(30);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const experienceToNextLevel = (): number => {
    return Math.pow((level + 1) * 4, 2);
  };

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio(notificationAudio).play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio", {
        body: `Valendo ${challenge.amount} xp!!`,
        icon: notificationIcon,
      });
    } else {
      Notification.requestPermission();
    }
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;

    let newExperience = currentExperience + amount;

    if (newExperience >= experienceToNextLevel()) {
      newExperience = newExperience - experienceToNextLevel();
      levelUp();
    }

    setCurrentExperience(newExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export { ChallengesProvider, ChallengesContext };
