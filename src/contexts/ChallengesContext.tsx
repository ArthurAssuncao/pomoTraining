import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../assets/data/challenges.json";
import NotificationIcon from "../assets/img/icons/level.svg";
import { LevelUpModal } from "../components/LevelUpModal";
import { LoginModal } from "../components/LoginModal";
import { GithubApi, GithubUserData } from "../services/GithubApi";

interface Challenge {
  type: string;
  description: string;
  amount: number;
  howDo: string;
  image: {
    url: string;
    copyright: string;
  };
}

interface ChallengesContextData {
  user: GithubUserData;
  githubUsername: string;
  numberChallengesPerCicle: number;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  setNumberChallenges: (newValue: number) => void;
  experienceToNextLevel: () => number;
  levelUp: () => void;
  nextChallenge: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  setGithubUsername: (username: string) => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  numberChallengesPerCicle: number;
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
  const [numberChallengesPerCicle, setNumberChallengesPerCicle] = useState(
    rest.numberChallengesPerCicle ?? 1
  );
  const [githubUsername, setGithubUsernamePrivate] = useState(
    rest.githubUsername ?? ""
  );
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const [challengesHasBeenSorted, setChallengesHasBeenSorted] = useState([]);

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    if (user && process.browser) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    Cookies.set("githubUsername", String(githubUsername));
    Cookies.set("numberChallengesPerCicle", String(numberChallengesPerCicle));
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [
    user,
    githubUsername,
    numberChallengesPerCicle,
    level,
    currentExperience,
    challengesCompleted,
  ]);

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

  const setNumberChallenges = (newValue: number) => {
    if (newValue > 0) {
      setNumberChallengesPerCicle(newValue);
    }
  };

  const sortChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    if (challengesHasBeenSorted.includes(randomChallengeIndex)) {
      return sortChallenge();
    }
    return randomChallengeIndex;
  };

  const nextChallenge = () => {
    const randomChallengeIndex = sortChallenge();
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  };

  const showNotification = (challenge) => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("Novo desafio", {
          body: `Valendo ${challenge.amount} xp!!`,
          icon: NotificationIcon,
        });
      } else {
        Notification.requestPermission();
      }
    }
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = sortChallenge();
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/sound/notification.mp3").play();

    showNotification(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;

    const activeChallengeIndex = challenges.indexOf(activeChallenge);

    const newChallengesHasBeenSorted = challengesHasBeenSorted.slice();
    newChallengesHasBeenSorted.push(activeChallengeIndex);

    if (newChallengesHasBeenSorted.length == challenges.length) {
      newChallengesHasBeenSorted.splice(0, challengesHasBeenSorted.length);
    }
    setChallengesHasBeenSorted(newChallengesHasBeenSorted);

    let newExperience = currentExperience + amount;

    if (newExperience >= experienceToNextLevel()) {
      newExperience = newExperience - experienceToNextLevel();
      levelUp();
    }

    setCurrentExperience(newExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  const setGithubUsername = async (name: string) => {
    setGithubUsernamePrivate(name);
    const githubApi = GithubApi;
    const userPromise: Promise<GithubUserData> = githubApi.user(name);
    const user: GithubUserData = await userPromise;
    setGithubUsernamePrivate(user.username);
    setUser(user);
  };

  return (
    <ChallengesContext.Provider
      value={{
        user,
        githubUsername,
        numberChallengesPerCicle,
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        activeChallenge,
        levelUp,
        setNumberChallenges,
        nextChallenge,
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
