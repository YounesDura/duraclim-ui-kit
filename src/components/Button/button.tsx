import React, { useMemo } from 'react';
import styles from './button.module.scss';

type ButtonVariant = 
  | 'primary' 
  | 'success' 
  | 'cancel' 
  | 'ghost' 
  | 'dropdown' 
  | 'dropdownGhost' 
  | 'deactivate';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  text?: string;
  icon?: React.ReactNode;
  deactivated?: boolean;  
  dropdownOptions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const Button = ({
  variant = 'primary',
  text,
  icon,
  deactivated = false,  // Add default value
  dropdownOptions,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  if (!text && !icon) {
    console.warn('Button should have either text or icon');
    return null;
  }

  const isDropdown = useMemo(() => 
    ['dropdown', 'dropdownGhost'].includes(variant), 
    [variant]
  );

  const combinedClasses = useMemo(() => 
    `${styles.button} ${styles[variant] || ''} ${deactivated ? styles.deactivated : ''} ${className || ''}`.trim(),
    [variant, className, deactivated]
  );

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={!deactivated ? onClick : undefined}
      disabled={deactivated}
      {...props}
    >
      {isDropdown ? (
        <div className={styles.dropdownContent}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {text && <span className={styles.text}>{text}</span>}
          <span className={styles.arrow}>▼</span>
        </div>
      ) : (
        <>
          {icon && <span className={styles.icon}>{icon}</span>}
          {text && <span className={styles.text}>{text}</span>}
        </>
      )}
      {isDropdown && dropdownOptions && (
        <ul className={styles.dropdownMenu}>
          {dropdownOptions.map((option, index) => (
            <li key={`dropdown-option-${index}`} onClick={option.onClick}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default Button;