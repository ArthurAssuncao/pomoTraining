import githubIcon from "../../assets/img/icons/github-square.svg";
import lattesIcon from "../../assets/img/icons/lattes-square.svg";
import linkedinIcon from "../../assets/img/icons/linkedin-square.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.title}>
        Acesse minhas redes sociais e veja mais projetos
      </p>
      <div className={styles.socialContainer}>
        <a href="https://github.com/arthurassuncao">
          <img
            className={styles.socialIcon}
            src={githubIcon}
            alt="Link para Github de Arthur Assuncao"
          />
        </a>
        <a href="https://www.linkedin.com/in/arthurassuncao">
          <img
            className={`${styles.socialIcon} ${styles.socialIconLinkedin}`}
            src={linkedinIcon}
            alt="Link para Linked de Arthur Assuncao"
          />
        </a>
        <a href="http://lattes.cnpq.br/8136835668168874">
          <img
            className={styles.socialIcon}
            src={lattesIcon}
            alt="Link para Lattes de Arthur Assuncao"
          />
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
