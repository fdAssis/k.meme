import styles from "./styles.module.scss";
import Image from "next/image";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/imagens/ig.news.svg"
          alt="ig.news"
          width={108}
          height={30}
        />
        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  );
}
