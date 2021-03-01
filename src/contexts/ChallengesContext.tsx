import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../assets/data/challenges.json";
import notificationIcon from "../assets/img/icons/level.svg";
import notificationAudio from "../assets/sound/notification.mp3";
import { LevelUpModal } from "../components/LevelUpModal";
import { LoginModal } from "../components/LoginModal";
import { GithubUserData } from "../services/GithubApi";

interface Challenge {
  type: string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  user: GithubUserData;
  setUser: (user: GithubUserData) => void;
  githubUsername: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: () => number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  setGithubUsername: (username: string) => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  githubUsername: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const ChallengesContext = createContext({} as ChallengesContextData);

const ChallengesProvider = ({ children, ...rest }: ChallengesProviderProps) => {
  const userLocalStorage: GithubUserData = process.browser
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [user, setUser] = useState(userLocalStorage ?? null);
  const [githubUsername, setGithubUsername] = useState(
    rest.githubUsername ?? ""
  );
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    if (user && process.browser) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    Cookies.set("githubUsername", String(githubUsername));
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [user, githubUsername, level, currentExperience, challengesCompleted]);

  const experienceToNextLevel = (): number => {
    return Math.pow((level + 1) * 4, 2);
  };

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  };

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
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
        user,
        setUser,
        githubUsername,
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
        setGithubUsername,
      }}
    >
      {!githubUsername ? <LoginModal /> : children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};

export { ChallengesProvider, ChallengesContext };
