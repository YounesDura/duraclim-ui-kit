import React, { isValidElement, ReactNode } from 'react';
import styles from './PageLayout.module.scss';

interface SidebarProps {
  position?: 'left' | 'right';
  maxWidth?: string;
}

interface PageLayoutProps {
  navbar: ReactNode;
  sidebar?: React.ReactElement<SidebarProps>;
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ navbar, sidebar, children, className = '' }: PageLayoutProps) => {
  let sidebarPositionClass = styles.rightSidebar;
  let sidebarStyle = { width: '400px' };

  if (isValidElement(sidebar)) {
    const { position = 'right', maxWidth = '400px' } = sidebar.props;
    sidebarPositionClass = position === 'left' ? styles.left : styles.rightSidebar;
    sidebarStyle = { width: maxWidth };
  }

  return (
    <div className={`${styles.page} ${className}`}>
      <div className={styles.navbar}>{navbar}</div>
      <div className={styles.content}>
        {sidebar && (
          <div className={`${styles.sidebar} ${sidebarPositionClass}`} style={sidebarStyle}>
            {sidebar}
          </div>
        )}
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;