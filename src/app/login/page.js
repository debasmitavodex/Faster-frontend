"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axiosInstance.post("/login/user", {
        username: email,
        password,
      });

      const { token } = response.data.data;
      //console.log(token, "tokennnnn");
      
      const { firstName } = response.data.data.userdetail;

      // Save token to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("firstName", firstName);

      // Set default Authorization header
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      // Redirect to homepage
      router.push("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };
  return (
    <div className={styles.container}>
      {/* Left: Login Form */}
      <div className={styles.formSection}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleLogin} autoComplete="off">
          <label>
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />

          <label>
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password" // prevents autofill on some browsers
          />

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
