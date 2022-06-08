import { FaGithub } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import styles from "./styles.module.scss";
export function SignInButton() {
  var isUserSignIn: boolean = true;

  return isUserSignIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04D361" />
      Francisco de Assis
      <IoExitOutline color="#737380" />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#EBA417" />
      Sing in with GitHub
    </button>
  );
}
