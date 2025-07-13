"use client";

import { useState } from "react";
import styles from "./register.module.css";
import axiosInstance from "@/lib/axiosInstance";

export default function RegisterPage() {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    countryCode: "+91",
    userAddress: {
      floor: "",
      building: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      nickname: "",
    },
    location: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in form.userAddress) {
      setForm((prev) => ({
        ...prev,
        userAddress: {
          ...prev.userAddress,
          [name]: value,
        },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      userAddress: [form.userAddress],
    };

    try {
      const response = await axiosInstance.post("/user", payload);

      if (response.data?.status === "success") {
        alert("Registration successful!");
        // Redirect or reset form if needed
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className={styles.background}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Register Your Account</h2>

        <div className={styles.row}>
          <div style={{ flex: 1 }}>
            <label className={styles.label}>First Name</label>
            <input
              className={styles.input}
              name="firstName"
              placeholder="Enter your first name"
              value={form.firstName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className={styles.label}>Last Name</label>
            <input
              className={styles.input}
              name="lastName"
              placeholder="Enter your last name"
              value={form.lastName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
        </div>

        <label className={styles.label}>Username</label>
        <input
          className={styles.input}
          name="userName"
          placeholder="Choose a username"
          value={form.userName}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Choose a password"
          value={form.password}
          onChange={handleChange}
          required
          autoComplete="off"
        />

        <label className={styles.label}>Phone Number</label>
        <div className={styles.countryRow}>
          <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className={`${styles.select} ${styles.countryCode}`}
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+61">🇦🇺 +61</option>
          </select>
          <input
            className={`${styles.input} ${styles.phoneInput}`}
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <h3 className={styles.label} style={{ marginTop: "2rem" }}>
          Address Details
        </h3>

        <label className={styles.label}>Floor</label>
        <input
          className={styles.input}
          name="floor"
          placeholder="e.g. 2nd Floor"
          value={form.userAddress.floor}
          onChange={handleChange}
          autoComplete="off"
        />

        <label className={styles.label}>Building Name/Number</label>
        <input
          className={styles.input}
          name="building"
          placeholder=""
          value={form.userAddress.building}
          onChange={handleChange}
          autoComplete="off"
        />

        <label className={styles.label}>Street</label>
        <input
          className={styles.input}
          name="street"
          placeholder=""
          value={form.userAddress.street}
          onChange={handleChange}
          autoComplete="off"
        />

        <label className={styles.label}>City</label>
        <input
          className={styles.input}
          name="city"
          placeholder=""
          value={form.userAddress.city}
          onChange={handleChange}
          autoComplete="off"
        />

        <label className={styles.label}>State</label>
        <input
          className={styles.input}
          name="state"
          placeholder=""
          value={form.userAddress.state}
          onChange={handleChange}
          autoComplete="off"
        />

        <label className={styles.label}>Pincode</label>
        <input
          className={styles.input}
          name="pincode"
          placeholder=""
          value={form.userAddress.pincode}
          onChange={handleChange}
          autoComplete="off"
        />

        <label className={styles.label}>Address Nickname</label>
        <input
          className={styles.input}
          name="nickname"
          placeholder="e.g. Home, Office"
          value={form.userAddress.nickname}
          onChange={handleChange}
          autoComplete="off"
        />

        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}
