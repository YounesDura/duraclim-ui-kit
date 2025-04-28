import React, { useState } from 'react';
import styles from './cardService.module.scss';

interface CardServiceProps {
  image: string;
  label?: 'low' | 'medium' | 'high';
  title: string;
  price: number;
  quantity?: number;
  serviceId: string;
  housingType?: string;
  housingCategory?: 'casa' | 'condo';
  hasVents?: boolean;
  trapsCount?: number;
  onQuantityChange?: (value: number) => void;
  onTrapsChange?: (value: number) => void;
  onDelete?: () => void;
  onQuantityAction?: (type: 'increment' | 'decrement', value: number) => void;
  onHousingTypeChange?: (serviceId: string, value: string) => void;
}

const condoTypes = ['3-1/2', '4-1/2', '5-1/2', 'penthouse', 'two-floor'];

const CardService = ({
  image,
  label,
  title,
  price,
  quantity = 1,
  serviceId,
  housingType,
  housingCategory,
  hasVents,
  trapsCount = 0,
  onQuantityChange,
  onTrapsChange,
  onDelete,
  onQuantityAction,
  onHousingTypeChange,
}: CardServiceProps) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const [localTrapsCount, setLocalTrapsCount] = useState(trapsCount);
  const [localHousingType, setLocalHousingType] = useState(housingType || '');

  const handleDecrement = () => {
    if (localQuantity > 1) {
      setLocalQuantity(prev => {
        const newVal = prev - 1;
        onQuantityChange?.(newVal);
        onQuantityAction?.('decrement', newVal);
        return newVal;
      });
    }
  };

  const handleIncrement = () => {
    setLocalQuantity(prev => {
      const newVal = prev + 1;
      onQuantityChange?.(newVal);
      onQuantityAction?.('increment', newVal);
      return newVal;
    });
  };

  const handleTrapsDecrement = () => {
    if (localTrapsCount > 0) {
      setLocalTrapsCount(prev => {
        const newVal = prev - 1;
        onTrapsChange?.(newVal);
        return newVal;
      });
    }
  };

  const handleTrapsIncrement = () => {
    setLocalTrapsCount(prev => {
      const newVal = prev + 1;
      onTrapsChange?.(newVal);
      return newVal;
    });
  };

  const handleHousingTypeChange = (value: string) => {
    setLocalHousingType(value);
    onHousingTypeChange?.(serviceId, value);
  };

  const Counter = ({
    label,
    value,
    onIncrement,
    onDecrement,
  }: {
    label: string;
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
  }) => (
    <div className={styles.counterGroup}>
      <label>{label}</label>
      <div className={styles.counter}>
        <button onClick={onDecrement}>–</button>
        <span>{String(value).padStart(2, '0')}</span>
        <button onClick={onIncrement}>＋</button>
      </div>
    </div>
  );

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
        <button className={styles.deleteX} onClick={onDelete} aria-label="Delete">
          ✕
        </button>

        {housingCategory === 'condo' && (
          <div className={styles.counterGroup}>
            <label>Type:</label>
            <div className={styles.chipSelect}>
              <select
                className={`${styles.select} ${!localHousingType ? styles.error : ''}`}
                value={localHousingType}
                onChange={(e) => handleHousingTypeChange(e.target.value)}
              >
                <option value="">Select type</option>
                {condoTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {hasVents && (
          <Counter
            label="Traps:"
            value={localTrapsCount}
            onIncrement={handleTrapsIncrement}
            onDecrement={handleTrapsDecrement}
          />
        )}

        <Counter
          label="Qty:"
          value={localQuantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  );
};

export default CardService;