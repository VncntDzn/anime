import React from 'react';
import styles from 'scss/main.module.scss';

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <h1 className={styles.navbar__title}>Anime!</h1>
      </nav>
    </header>
  );
};

export default Navbar;
