import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBoxLayout } from "../layouts/ChallengeBoxLayout";
import { ProfileCountDownLayout } from "../layouts/ProfileCountDownLayout";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | PomoTraining</title>
      </Head>

      <ExperienceBar />
      <section>
        <ProfileCountDownLayout>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </ProfileCountDownLayout>
        <ChallengeBoxLayout>
          <ChallengeBox />
        </ChallengeBoxLayout>
      </section>
    </div>
  );
}
