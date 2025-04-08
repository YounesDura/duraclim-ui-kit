import { ReactNode } from 'react';
import styles from './container.module.scss';

interface ContainerProps {
  children: ReactNode;
  maxWidth?: 'default' | 'narrow' | 'wide' | 'full';
  padding?: boolean;
  className?: string;
}

const getMaxWidth = (size: ContainerProps['maxWidth']) => {
  switch (size) {
    case 'narrow':
      return styles.narrow;
    case 'wide':
      return styles.wide;
    case 'full':
      return styles.full;
    default:
      return styles.default;
  }
};

const Container = ({
  children,
  maxWidth = 'default',
  padding = true,
  className = '',
}: ContainerProps) => {
  const combinedClasses = [
    styles.container,
    getMaxWidth(maxWidth),
    padding ? styles.padding : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Container;
