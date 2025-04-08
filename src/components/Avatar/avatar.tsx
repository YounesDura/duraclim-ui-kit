import React from 'react';
import styles from './avatar.module.scss';
import fallbackImage from '../../assets/illustrations/person.png';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  image?: string;
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
      <img
        src={image || fallbackImage}
        alt={alt}
        className={styles.avatarImage}
      />
    </div>
  );
};

export default Avatar;