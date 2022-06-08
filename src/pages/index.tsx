import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../service/stripe";
import styles from "./main.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
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
            Get acess to all the publications{" "}
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/imagens/woman.svg" alt="woman in desk with computer" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1L8CcDI8Nyes1aI0QSRkca26", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 HORAS
  };
};
