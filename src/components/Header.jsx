import React from "react";
import { FaSearch, FaBell, FaPlus } from "react-icons/fa";
import styles from "../styles/components/Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <h1 className={styles.logo}>
          <span className={styles.logoHealth}>Health</span>
          <span className={styles.logoCare}>Care</span>
        </h1>
      </div>
      <div className={styles.searchSection}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          disabled
        />
      </div>
      <div className={styles.actionSection}>
        <FaBell className={styles.headerIcon} />
        <div className="user-info">
          <span className="user-name">Vara Prasad</span>
            </div>

        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
    </header>
  );
}
