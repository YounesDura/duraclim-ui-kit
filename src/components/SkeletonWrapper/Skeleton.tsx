import React from 'react';
import styles from "./SkeletonWrapper.module.scss"

type Variant = 'text' | 'rectangular' | 'rounded' | 'circular';
type Animation = 'pulse' | 'wave' | false;

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  variant?: Variant;
  animation?: Animation;
  children?: React.ReactNode;
  className?: string;
}

const Skeleton = ({
  width,
  height,
  variant = 'text',
  animation = 'pulse',
  children,
  className = '',
}: SkeletonProps) => {
  const style = {
    width: width ?? undefined,
    height: height ?? undefined,
  };

  return (
    <div
      className={`
        ${styles.skeleton}
        ${styles[variant]}
        ${animation && styles[animation]}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};

export default Skeleton;