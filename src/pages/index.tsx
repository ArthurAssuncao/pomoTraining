import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts";
import { HomeLayout } from "../layouts/HomeLayout";

interface UserCookieProps {
  githubUsername: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: UserCookieProps) {
  return (
    <ChallengesProvider
      githubUsername={props.githubUsername}
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <HomeLayout />
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: UserCookieProps }> => {
  const {
    githubUsername,
    level,
    currentExperience,
    challengesCompleted,
  } = context.req.cookies;

  return {
    props: {
      githubUsername: githubUsername ?? "",
      level: level ? Number(level) : 1,
      currentExperience: currentExperience ? Number(currentExperience) : 0,
      challengesCompleted: challengesCompleted
        ? Number(challengesCompleted)
        : 0,
    },
  };
};
