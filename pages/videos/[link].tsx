import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Home.module.css";

const getSrc = (src: string) => {
  if (src === "airplane-shoe-movie") {
    return "https://res.cloudinary.com/dqki6kci3/video/upload/v1652101228/frhzvi9xduyopilhba7e.mov";
  }
  if (src === "drill-drawing") {
    return "https://res.cloudinary.com/dqki6kci3/video/upload/v1652101204/wyuh3mpc5bumwsrllos8.mov";
  }
};

const Videos: React.FC<Props> = () => {
  const router = useRouter();
  const { link } = router.query;

  if (!link) return null;

  const src = getSrc(link as string);

  return (
    <main className={styles.main}>
      <video src={src} controls autoPlay height='640' width='360' />
    </main>
  );
};

type Props = {};

export default Videos;
