"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Image
          src="/image.jpg"
          alt="Welcome Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to FASTER</h1>
          <div className={styles.buttonGroup}>
            <Link href="/login">
              <button className={styles.button}>Login</button>
            </Link>
            <Link href="/register">
              <button className={styles.buttonOutline}>Register</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
