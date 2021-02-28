import Head from "next/head";
import logo from "../../assets/img/icons/pomoTraining-icon.svg";
import { ChallengeBox } from "../../components/ChallengeBox";
import { CompleteChallenges } from "../../components/CompleteChallenges";
import { CountDown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import { CountdownProvider, ThemeToggler } from "../../contexts";
import { ChallengeBoxLayout } from "../../layouts/ChallengeBoxLayout";
import { ProfileCountDownLayout } from "../../layouts/ProfileCountDownLayout";
import { Footer } from "../Footer";
import styles from "./HomeLayout.module.scss";

const HomeLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | PomoTraining</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.appInfo}>
          <img
            className={styles.appLogo}
            src={logo}
            alt="Logo do PomoTraining"
          />
          <h1 className={styles.appName}>PomoTraining</h1>
        </div>
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
      <Footer />
    </div>
  );
};

export { HomeLayout };
