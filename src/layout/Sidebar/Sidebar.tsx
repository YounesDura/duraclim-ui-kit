// layout/Sidebar.tsx
import React from 'react';
import './sidebar.css';

interface SidebarProps {
  className?: string;
  children: React.ReactNode;
}

const Sidebar = ({
  className = '',
  children,
}: SidebarProps) => {
  return (
    <aside className={`sidebar ${className}`}>
      {children}
    </aside>
  );
};

export default Sidebar;