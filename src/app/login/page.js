"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      {/* Left: Login Form */}
      <div className={styles.formSection}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <label>
            <strong>Email</strong>
          </label>
          <input type="email" placeholder="Enter your email" required />

          <label>
            <strong>Password</strong>
          </label>
          <input type="password" placeholder="Enter your password" required />

          <div className={styles.links}>
            <Link href="#" className={styles.leftLink}>
              Forgot Password?
            </Link>
            <Link href="/register" className={styles.rightLink}>
              Not a user? <span>Register</span>
            </Link>
          </div>

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>

      {/* Right: Image */}
      <div className={styles.imageSection}>
        <Image
          src="/login.jpg"
          alt="Login Visual"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
