import { FaGoogle } from "react-icons/fa";
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
      {session.user.name}
      <IoExitOutline color="#737380" />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("google")}
    >
      <FaGoogle color="#EBA417" />
      Sing in with Google
    </button>
  );
}
