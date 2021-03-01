import React, { useContext } from "react";
import closeIcon from "../../assets/img/icons/close.svg";
import { ChallengesContext, CountdownContext } from "../../contexts";
import styles from "./ConfigModal.module.scss";
import { ConfigModalField } from "./ConfigModalField";

interface ConfigModalProps {
  show: boolean;
  handleClose: () => void;
}

const ConfigModal = (props: ConfigModalProps) => {
  const { user, githubUsername, setGithubUsername } = useContext(
    ChallengesContext
  );
  const { maxMinutes, setMaxMinutes } = useContext(CountdownContext);
  const { show, handleClose } = props;

  const saveNewGithubUser = (newValue) => {
    const value: string = newValue;
    if (typeof value === "string") {
      setGithubUsername(value);
    }
  };

  const saveNewMaxMinutes = (newValue) => {
    const value: number = Number(newValue);

    if (!isNaN(value) && typeof value === "number") {
      setMaxMinutes(value);
    }
  };

  return (
    <>
      {show && (
        <div className={styles.overlay}>
          <section className={styles.container}>
            <div className={styles.closeButton}>
              <img src={closeIcon} alt="close icon" onClick={handleClose} />
            </div>
            <header className={styles.header}>Configurações</header>

            <p className={styles.description}>
              Altere configurações do sistema.
            </p>

            <div className={styles.fields}>
              <ConfigModalField
                icon={user.profilePhoto}
                name="githubUsername"
                value={githubUsername}
                handleClick={saveNewGithubUser}
              />

              <ConfigModalField
                name="maxMinutes"
                value={maxMinutes}
                handleClick={saveNewMaxMinutes}
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export { ConfigModal };
