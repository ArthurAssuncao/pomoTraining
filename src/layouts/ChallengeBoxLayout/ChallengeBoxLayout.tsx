import { ReactNode } from "react";
import styles from "./ChallengeBoxLayout.module.scss";

interface ChallengeBoxLayoutProps {
  children: ReactNode;
}

const ChallengeBoxLayout = ({ children }: ChallengeBoxLayoutProps) => {
  return <article className={styles.challengeBoxLayout}>{children}</article>;
};

export { ChallengeBoxLayout };
