import React, { ReactNode } from 'react';
import styles from './avatar.module.scss';
import fallbackImage from '@/assets/illustrations/person.png';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  image?: string | ReactNode;  // Modified to accept both string and ReactNode
  alt?: string;
  className?: string;
  size?: AvatarSize;
}

const sizeMap = {
  sm: 48,
  md: 96,
  lg: 128,
} as const;

const Avatar = ({ 
  image, 
  alt = 'User avatar', 
  className = '',
  size = 'sm' 
}: AvatarProps) => {
  const dimensions = sizeMap[size];

  return (
    <div 
      className={`${styles.avatarWrapper} ${className}`}
      style={{ width: `${dimensions}px`, height: `${dimensions}px` }}
    >
      {typeof image === 'string' ? (
        <img
          src={image || fallbackImage}
          alt={alt}
          className={styles.avatarImage}
        />
      ) : image || (
        <img
          src={fallbackImage}
          alt={alt}
          className={styles.avatarImage}
        />
      )}
    </div>
  );
};

export default Avatar;