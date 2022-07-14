import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home<NextPage> () {
  const [ status, setStatus ] = useState<number>(0);
  const incrementHandler = () => {
    setStatus((pre) => pre + 1);
  };
  return (
    <div className={styles.container}>
      <p>カウント: {status}</p>
      <button onClick={incrementHandler}>+</button>
    </div>)
};







