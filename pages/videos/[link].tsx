import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Home.module.css";

const Videos: React.FC<Props> = () => {
  const router = useRouter();
  const { link } = router.query;

  if (!link) return null;

  return (
    <main className={styles.main}>
      <source src={`/items/${link}.mp4`} type="video/mp4"/>
    </main>
  );
};

type Props = {};

export default Videos;
