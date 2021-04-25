import Head from "next/head";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/img/icons/pomoTraining-icon-128.png";
import { ChallengeBox } from "../../components/ChallengeBox";
import { CompleteChallenges } from "../../components/CompleteChallenges";
import { ConfigModal } from "../../components/ConfigModal";
import { CountDown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Logger } from "../../components/Logger";
import { Profile } from "../../components/Profile";
import {
  CountdownProvider,
  LoggerProvider,
  ThemeToggler,
} from "../../contexts";
import { ChallengeBoxLayout } from "../../layouts/ChallengeBoxLayout";
import { ProfileCountDownLayout } from "../../layouts/ProfileCountDownLayout";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";
import styles from "./HomeLayout.module.scss";

const HomeLayout = () => {
  const [showConfigModal, setShowConfigModal] = useState(false);

  const closeConfigModal = () => {
    setShowConfigModal(false);
  };

  const homeMenuClick = () => {};

  const configMenuClick = () => {
    setShowConfigModal(true);
  };

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
      <NavBar
        handleClickHome={homeMenuClick}
        handleClickConfig={configMenuClick}
      />
      <CountdownProvider>
        <LoggerProvider maxLogs={100}>
          <main className={styles.main}>
            <ConfigModal
              show={showConfigModal}
              handleClose={closeConfigModal}
            />
            <ProfileCountDownLayout>
              <Profile />
              <CompleteChallenges />
              <CountDown />
            </ProfileCountDownLayout>
            <ChallengeBoxLayout>
              <ChallengeBox />
            </ChallengeBoxLayout>
          </main>
          <Logger />
        </LoggerProvider>
      </CountdownProvider>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export { HomeLayout };
