import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../contexts";
import { HomeLayout } from "../layouts/HomeLayout";

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
      <HomeLayout />
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
