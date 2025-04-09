import React, { ReactNode } from 'react';
import styles from './Dialog.module.scss';

interface DialogProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Dialog = ({ visible, onClose, children }: DialogProps) => {
  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;