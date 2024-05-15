import React from 'react';
import styles from './page.module.css';

export default function Profile() {
  return (
    <main className={styles.profileContainer}>
      <div className={styles.avatarContainer}>
        <img src="./avatar-example.svg" alt="Avatar" className={styles.avatar} />
        <h1 className={styles.name}>Nome</h1>
      </div>
      <div className={styles.statsContainer}>
        <img src="stats-icon.svg" alt="Estatísticas" className={styles.statsIcon} />
        <p className={styles.statsText}>Estatísticas</p>
      </div>
    </main>
  );
}