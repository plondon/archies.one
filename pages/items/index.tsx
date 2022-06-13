import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Items: React.FC<Props> = () => {
  return (
    <main className={styles.main}>
      <h1 className="text-6xl text-transparent bg-gradient-to-r bg-clip-text from-orange-400 via-yellow-300 to-blue-700">
        Items for Sale
      </h1>
      <div className="flex w-full flex-wrap justify-center mt-10 gap-8">
        <div className="w-1/4">
          <Link href={`/videos/${"airplane-shoe-movie"}`}>
            <a>
              <Image
                alt="airplane"
                src={"/items/airplane-shoe.jpg"}
                width={3}
                height={4}
                layout="responsive"
              />
              <div>
                <h2>Airplane Shoe (2022)</h2>
                <p className="text-sm text-gray-500">Archie Green</p>
                <p className="text-sm text-gray-500">$20.00</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="w-1/4">
          <a>
            <Image
              alt="lawn-mower"
              src={"/items/lawn-mowing.jpeg"}
              width={3}
              height={4}
              layout="responsive"
            />
            <div>
              <h2>Lawn Mowing (2022)</h2>
              <p className="text-sm text-gray-500">Archie Green</p>
              <p className="text-sm text-gray-500">$45.00 / lawn mow</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

type Props = {};

export default Items;
