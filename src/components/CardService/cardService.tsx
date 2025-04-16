import React from 'react';
import styles from './cardService.module.scss';


interface CardServiceProps {
  image: string;
  label?: 'low' | 'medium' | 'high';
  title: string;
  price: number;
  quantity: number;
  serviceId: string;
  housingType?: string;
  onQuantityChange?: (value: number) => void;
  onDelete?: () => void;
  onQuantityAction?: (type: 'increment' | 'decrement', value: number) => void;
  onHousingTypeChange?: (serviceId: string, value: string) => void;
}

const CardService = ({
  image,
  label,
  title,
  price,
  quantity,
  serviceId,
  housingType,
  onQuantityChange,
  onDelete,
  onQuantityAction,
  onHousingTypeChange,
}: CardServiceProps) => {
  // Remove traps-related code
  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange?.(quantity - 1);
      onQuantityAction?.('decrement', quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange?.(quantity + 1);
    onQuantityAction?.('increment', quantity + 1);
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
          <label>Type:</label>
          <div className={styles.chipSelect}>
            <select 
              className={`${styles.select} ${!housingType ? styles.error : ''}`}
              value={housingType || ''}
              onChange={(e) => onHousingTypeChange?.(serviceId, e.target.value)}
            >
              <option value="">Select type</option>
              <option value="studio">Studio</option>
              <option value="3-1/2">3 1/2</option>
              <option value="4-1/2">4 1/2</option>
              <option value="5-1/2">5 1/2</option>
              <option value="penthouse">Penthouse</option>
              <option value="two-floor">Two Floor</option>
            </select>
          </div>
        </div>

        <div className={styles.counterGroup}>
          <label>Qty:</label>
          <div className={styles.counter}>
            <button onClick={handleDecrement}>–</button>
            <span>{String(quantity).padStart(2, '0')}</span>
            <button onClick={handleIncrement}>＋</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardService;