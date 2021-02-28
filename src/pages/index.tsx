import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import {
  ChallengesProvider,
  CountdownProvider,
  ThemeToggler,
} from "../contexts";
import { ChallengeBoxLayout } from "../layouts/ChallengeBoxLayout";
import { ProfileCountDownLayout } from "../layouts/ProfileCountDownLayout";
import styles from "./Home.module.scss";

interface UserCookieProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: UserCookieProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | PomoTraining</title>
        </Head>
        <header className={styles.header}>
          <ExperienceBar />
          <ThemeToggler />
        </header>
        <CountdownProvider>
          <main className={styles.main}>
            <ProfileCountDownLayout>
              <Profile />
              <CompleteChallenges />
              <CountDown />
            </ProfileCountDownLayout>
            <ChallengeBoxLayout>
              <ChallengeBox />
            </ChallengeBoxLayout>
          </main>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: UserCookieProps }> => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: level ? Number(level) : 1,
      currentExperience: currentExperience ? Number(currentExperience) : 0,
      challengesCompleted: challengesCompleted
        ? Number(challengesCompleted)
        : 0,
    },
  };
};
