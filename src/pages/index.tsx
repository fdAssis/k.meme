import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./main.module.scss";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.mainContainer}>
        <section className={styles.mainContent}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br /> the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <span>for R$10,50 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/imagens/woman.svg" alt="woman in desk with computer" />
      </main>
    </>
  );
}
