import React from 'react';
import styles from './cardService.module.scss';
import Button from '../Button/button';

interface CardServiceProps {
  image: string;
  label?: 'low' | 'medium' | 'high';
  title: string;
  price: number;
  quantity: number;
  traps: number;
  onQuantityChange?: (value: number) => void;
  onTrapsChange?: (value: number) => void;
  onDelete?: () => void;
  onQuantityAction?: (type: 'increment' | 'decrement', value: number) => void;
  onTrapsAction?: (type: 'increment' | 'decrement', value: number) => void;
}

const CardService = ({
  image,
  label,
  title,
  price,
  quantity,
  traps,
  onQuantityChange,
  onTrapsChange,
  onDelete,
  onQuantityAction,
  onTrapsAction,
}: CardServiceProps) => {
  const handleDecrement = (type: 'qty' | 'traps') => {
    if (type === 'qty' && quantity > 1) {
      onQuantityChange?.(quantity - 1);
      onQuantityAction?.('decrement', quantity - 1);
    }
    if (type === 'traps' && traps > 0) {
      onTrapsChange?.(traps - 1);
      onTrapsAction?.('decrement', traps - 1);
    }
  };

  const handleIncrement = (type: 'qty' | 'traps') => {
    if (type === 'qty') {
      onQuantityChange?.(quantity + 1);
      onQuantityAction?.('increment', quantity + 1);
    }
    if (type === 'traps') {
      onTrapsChange?.(traps + 1);
      onTrapsAction?.('increment', traps + 1);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={image} alt="Service" />
      </div>

      <div className={styles.info}>
        {label && (
          <span className={`${styles.label} ${styles[label]}`}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </span>
        )}
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>

      <div className={styles.controls}>
        <button 
          className={styles.deleteX}
          onClick={onDelete}
          aria-label="Delete"
        >
          ✕
        </button>

        <div className={styles.counterGroup}>
          <label>Traps:</label>
          <div className={styles.counter}>
            <button onClick={() => handleDecrement('traps')}>–</button>
            <span>{String(traps).padStart(2, '0')}</span>
            <button onClick={() => handleIncrement('traps')}>＋</button>
          </div>
        </div>

        <div className={styles.counterGroup}>
          <label>Qty:</label>
          <div className={styles.counter}>
            <button onClick={() => handleDecrement('qty')}>–</button>
            <span>{String(quantity).padStart(2, '0')}</span>
            <button onClick={() => handleIncrement('qty')}>＋</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardService;