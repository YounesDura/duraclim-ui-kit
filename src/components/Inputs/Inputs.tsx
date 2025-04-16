import React, { useState, ReactNode } from 'react';
import styles from './Inputs.module.scss';

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'select';

interface Option {
  value: string;
  label: string;
}

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>, 'type' | 'onChange'> {
  type?: InputType;
  placeholder?: string;
  icon?: ReactNode;
  options?: Option[];
  value?: string;
  onChange?: (value: string, isValid: boolean) => void;
  customValidation?: (value: string) => boolean;
}

const Input = ({
  type = 'text',
  placeholder,
  icon,
  options,
  value = '',
  onChange,
  customValidation,
  className,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = (val: string): boolean => {
    if (!val) return true;

    let isValidValue = true;
    let message = '';

    switch (type) {
      case 'email':
        isValidValue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        message = 'Please enter a valid email address';
        break;
      case 'url':
        isValidValue = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(val);
        message = 'Please enter a valid URL';
        break;
      case 'date':
        isValidValue = !isNaN(Date.parse(val));
        message = 'Please enter a valid date';
        break;
    }

    if (customValidation) {
      isValidValue = isValidValue && customValidation(val);
      message = 'Invalid input';
    }

    setErrorMessage(isValidValue ? '' : message);
    return isValidValue;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = e.target.value;
    const isValidValue = validateInput(newValue);
    setIsValid(isValidValue);
    onChange?.(newValue, isValidValue);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const combinedClasses = `
    ${styles.inputWrapper} 
    ${isFocused ? styles.focused : ''} 
    ${!isValid ? styles.error : ''} 
    ${className || ''}
  `.trim();

  return (
    <div className={combinedClasses}>
      {icon && <div className={styles.icon}>{icon}</div>}

      {type === 'select' ? (
        <select
          className={styles.input}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      )}

      {!isValid && errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;