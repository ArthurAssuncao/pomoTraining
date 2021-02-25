import Head from "next/head";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | PomoTraining</title>
      </Head>

      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
