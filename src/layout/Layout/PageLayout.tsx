import React, { ReactNode } from 'react';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  navbar: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ 
  navbar, 
  sidebar, 
  children,
  className = ''
}: PageLayoutProps) => {
  return (
    <div className={`${styles.page} ${className}`}>
      <div className={styles.navbar}>{navbar}</div>
      {sidebar && <div className={styles.sidebar}>{sidebar}</div>}
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default PageLayout;