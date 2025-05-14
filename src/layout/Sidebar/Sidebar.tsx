// layout/Sidebar.tsx
import React from 'react';
import './Sidebar.module.scss';

interface SidebarProps {
  position?: 'left' | 'right';
  maxWidth?: string;
  className?: string;
  children: React.ReactNode;
}

const Sidebar = ({
  position = 'right',
  maxWidth = '300px',
  className = '',
  children,
}: SidebarProps) => {
  const sidebarClass = `sidebar ${position === 'left' ? 'left' : 'right'} ${className}`;

  return (
    <aside className={sidebarClass} style={{ maxWidth }}>
      {children}
    </aside>
  );
};

export default Sidebar;