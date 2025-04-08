import React, { ReactNode } from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  position?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

const Sidebar = ({
  position = 'right',
  children,
  className = '',
  maxWidth,
}: SidebarProps) => {
  const sidebarClass = `${styles.sidebar} ${position === 'left' ? styles.left : styles.right} ${className}`.trim();

  return (
    <aside className={sidebarClass} style={{ maxWidth }}>
      <div >
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;