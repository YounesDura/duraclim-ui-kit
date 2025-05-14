// layout/PageLayout.tsx
import React, { isValidElement, ReactNode } from 'react';
import styles from './PageLayout.module.scss';

interface SidebarProps {
  maxWidth?: string;
}

interface PageLayoutProps {
  navbar: ReactNode;
  sidebar?: React.ReactElement<SidebarProps>;
  children: ReactNode;
  className?: string;
  sidebarPosition?: 'left' | 'right'; 
}

const PageLayout = ({
  navbar,
  sidebar,
  children,
  className = '',
  sidebarPosition = 'right',
}: PageLayoutProps) => {
  let sidebarStyle = { width: '400px' };

  if (isValidElement(sidebar)) {
    const { maxWidth = '400px' } = sidebar.props;
    sidebarStyle = { width: maxWidth };
  }

  const sidebarPositionClass =
    sidebarPosition === 'left' ? styles.leftSidebar : styles.rightSidebar;

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