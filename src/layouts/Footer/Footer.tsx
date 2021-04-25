import GithubIcon from "../../assets/img/icons/github-square.svg";
import LattesIcon from "../../assets/img/icons/lattes-square.svg";
import LinkedinIcon from "../../assets/img/icons/linkedin-square.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.title}>
        Acesse minhas redes sociais e veja mais projetos
      </p>
      <div className={styles.socialContainer}>
        <a href="https://github.com/arthurassuncao">
          <div className={styles.socialIcon}>
            <GithubIcon />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/arthurassuncao">
          <div className={`${styles.socialIcon} ${styles.socialIconLinkedin}`}>
            <LinkedinIcon />
          </div>
        </a>
        <a href="http://lattes.cnpq.br/8136835668168874">
          <div className={styles.socialIcon}>
            <LattesIcon />
          </div>
        </a>
      </div>
      <p className={styles.copyright}>
        Criado por Arthur Assuncao @ 2021 com diversas melhorias no projeto
        MoveIt da 4ª Next Level Week oferecido pela RocketSeat
      </p>
    </footer>
  );
};

export { Footer };
