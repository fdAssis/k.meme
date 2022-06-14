import { AiFillGoogleCircle } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

import styles from "./styles.module.scss";
export function SignInButton() {
  const { data: session, status } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <Image
        src={session.user.image}
        width={30}
        height={30}
        alt="profile image"
      />
      <span>{session.user.name}</span>
      <IoExitOutline color="#f1f3f5" />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("google")}
      placeholder="Sair da Aplicação"
    >
      <AiFillGoogleCircle color="#ffffff" />
      Sing in with Google
    </button>
  );
}
