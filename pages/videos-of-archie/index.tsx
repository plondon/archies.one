import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Items: React.FC<Props> = () => {
  return (
    <main className={styles.main}>
      <h1 className="text-6xl text-transparent bg-gradient-to-r bg-clip-text from-orange-400 via-yellow-300 to-blue-700">
        Videos of Archie
      </h1>
      <div className="flex w-full flex-wrap justify-center mt-10 gap-8">
        <div className="w-1/4">
          <Link href={`/videos/${'archie-monkey-may-10'}`}>
            <a>
              <Image
                alt="airplane"
                src={'/archie-monkey.jpeg'}
                width={3}
                height={4}
                layout="responsive"
              />
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
};

type Props = {};

export default Items;
