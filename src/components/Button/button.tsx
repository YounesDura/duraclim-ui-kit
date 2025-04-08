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
  icon?: string;
  dropdownOptions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const Button = ({
  variant = 'primary',
  text,
  icon,
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
    `${styles.button} ${styles[variant] || ''} ${className || ''}`.trim(),
    [variant, className]
  );

  const renderContent = () => {
    if (isDropdown) {
      return (
        <div className={styles.dropdownContent}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {text && <span className={styles.text}>{text}</span>}
          <span className={styles.arrow}>▼</span>
        </div>
      );
    }

    return (
      <>
        {icon && <span className={styles.icon}>{icon}</span>}
        {text && <span className={styles.text}>{text}</span>}
      </>
    );
  };

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={variant !== 'deactivate' ? onClick : undefined}
      disabled={variant === 'deactivate'}
      {...props}
    >
      {renderContent()}
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