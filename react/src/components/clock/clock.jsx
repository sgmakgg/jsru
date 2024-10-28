"use client";

import { useCurrentTime } from "./useClock.js";
import styles from "./clock.module.css";

export const Clock = () => {
  const time = useCurrentTime();

  return <div className={styles.container}>{time.toLocaleTimeString()}</div>;
};
