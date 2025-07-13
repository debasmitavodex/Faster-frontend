"use client";

import { useEffect, useState } from "react";
import styles from "./home.module.css";

export default function HomePage() {
  const [firstName, setFirstName] = useState(null); // explicitly null to check later

  useEffect(() => {
    const nameFromStorage = localStorage.getItem("firstName");
    console.log("Name from localStorage:", nameFromStorage); // 🐞 Debug
    setFirstName(nameFromStorage);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        Hi <span className={styles.name}>{firstName}</span>!
      </div>
      <br />
      <div className={styles.subtext}>
        Welcome to Faster <span className={styles.runner}>🏃‍♂️</span>
      </div>
    </div>
  );
}
