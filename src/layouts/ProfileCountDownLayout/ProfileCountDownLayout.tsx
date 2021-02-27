import { ReactNode } from "react";
import style from "./ProfileCountDownLayout.module.scss";

interface ProfileCountDownLayoutProps {
  children: ReactNode;
}

const ProfileCountDownLayout = ({ children }: ProfileCountDownLayoutProps) => {
  return <article className={style.profileCountDownLayout}>{children}</article>;
};

export { ProfileCountDownLayout };
