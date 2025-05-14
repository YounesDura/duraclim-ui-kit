// layout/Sidebar.tsx
import React from 'react';
import './sidebar.css';

interface SidebarProps {
  maxWidth?: string;
  className?: string;
  children: React.ReactNode;
}

const Sidebar = ({
  maxWidth = '300px',
  className = '',
  children,
}: SidebarProps) => {
  return (
    <aside className={`sidebar ${className}`} style={{ maxWidth }}>
      {children}
    </aside>
  );
};

export default Sidebar;