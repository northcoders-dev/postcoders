import React from "react";
import styles from "./Message.module.css";

export default function Message({ text }) {
  return <div className={styles.message}>{text}</div>;
}
