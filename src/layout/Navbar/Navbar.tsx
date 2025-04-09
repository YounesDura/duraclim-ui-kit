import React, { ReactNode } from 'react';
import styles from './Navbar.module.scss';
import Container from '../Container/Container';

interface NavbarProps {
  logo?: ReactNode;
  right?: ReactNode;
  className?: string;
}

const Navbar = ({
  logo,
  right,
  className,
}: NavbarProps) => (
  <header className={`${styles.navbar} ${className || ''}`}>
    <Container maxWidth="wide" padding={false}>
      <div className={styles.inner}>
        <div className={styles.logo}>{logo}</div>
        <div className={styles.right}>{right}</div>
      </div>
    </Container>
  </header>
);

export default Navbar;