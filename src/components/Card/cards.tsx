import React from 'react';
import styles from './card.module.scss';

interface CardProps {
  image: string;
  title: string;
  price?: number;
  itemsCount?: number;
  isSelected?: boolean;
  isAdded?: boolean;
  mode?: 'select' | 'add';
  onEdit?: () => void;
  value?: string;
  groupName?: string;
  onChange?: (value: string) => void;
  tag?: string; // Add tag prop
}

const Card = ({
  image,
  title,
  price,
  itemsCount,
  isSelected = false,
  isAdded,
  mode = 'select',
  onEdit,
  value,
  groupName,
  onChange,
  tag,
}: CardProps) => {
  const handleSelect = () => {
    if (mode === 'select' && value && onChange) {
      onChange(value);
    }
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.();
  };

  const showRadio = mode === 'select';
  const showPlus = mode === 'add';

  return (
    <div
      className={`${styles.card} ${isSelected || isAdded ? styles.active : ''}`}
      onClick={handleSelect}
    >
      {tag && <div className={styles.tag}>{tag}</div>}
      
      <div className={styles.cardHeader}>
        {showRadio && (
          <div className={`${styles.radio} ${isSelected ? 'active' : ''}`}>
            {isSelected && <div className={styles.radioDot} />}
          </div>
        )}

        {showPlus && (
          <div className={styles.addedGroup}>
            <div className={`${styles.plus} ${isAdded ? styles.plusActive : ''}`}>＋</div>
            {isAdded && (
              <div className={styles.countChip}>
                <span className={styles.countNumber}>{itemsCount}</span>
                <span className={styles.countText}>items</span>
              </div>
            )}
          </div>
        )}

        {onEdit && (
          <button className={styles.editButton} onClick={handleEditClick}>
            ✏️
          </button>
        )}
      </div>

      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.title}>{title}</div>

      {price !== undefined && (
        <div className={styles.price}>{price} $</div>
      )}
    </div>
  );
};

export default Card;