import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import * as Lawn from "../public/lawn-mowing.jpeg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Archie&apos;s Website</title>
        <meta name="description" content="Archie's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-6xl text-transparent bg-gradient-to-r bg-clip-text from-orange-400 via-yellow-300 to-blue-700">
          Welcome to{" "}
          <a href="https://nextjs.org" className="">
            Archies Website!
          </a>
        </h1>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Archie&#8217;s website!</p>
            </a>
          </Link>
          <Link href="/items">
            <a className={styles.card}>
              <h2>Items For Sale &rarr;</h2>
              <p>View handmade items by Archie!</p>
            </a>
          </Link>
          <Link href="/videos-of-archie">
            <a className={styles.card}>
              <h2>Videos of Archie &rarr;</h2>
              <p>View videos of Archie being crazy!</p>
            </a>
          </Link>
        </div>

        <p className="text-2xl py-6 text-green-500">
          LAWN MOWING $32.99 / LAWN
        </p>
        <div className="relative w-72 h-48 mt-8">
          <Image src={Lawn} layout="fill" objectFit="contain" />
        </div>
        <p className="text-2xl py-2 text-blue-600">DISCOUNTS:</p>
        <p className="text-yellow-300">if you live in Carrol Gardens $5 off</p>
        <p className="text-yellow-300">if your lawn gets mowed 12 times your 13th is free</p>
        <p className="text-yellow-300">if a tree/bush/plant gets knocked down - $10 discount</p>
      </main>
    </div>
  );
};

export default Home;
