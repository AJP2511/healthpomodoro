import { ExperienceBar } from "../components/ExperienceBar";
import styles from "../styles/pages/Home.module.css";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Início | MoveIt :)</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
