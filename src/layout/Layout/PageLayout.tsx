import React, { ReactNode } from 'react';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  navbar: ReactNode;
  sidebar?: React.ReactElement;
  children: ReactNode;
  className?: string;
  sidebarPosition?: 'left' | 'right';
  sidebarWidth?: string; // ✅ Controlled here
}

const PageLayout = ({
  navbar,
  sidebar,
  children,
  className = '',
  sidebarPosition = 'right',
  sidebarWidth = '400px', // ✅ Default value here
}: PageLayoutProps) => {
  const sidebarPositionClass =
    sidebarPosition === 'left' ? styles.leftSidebar : styles.rightSidebar;

  return (
    <div className={`${styles.page} ${className}`}>
      <div className={styles.navbar}>{navbar}</div>
      <div className={styles.content}>
        {sidebar && (
          <div
            className={`${styles.sidebar} ${sidebarPositionClass}`}
            style={{ width: sidebarWidth }}
          >
            {sidebar}
          </div>
        )}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;