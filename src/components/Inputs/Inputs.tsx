import React, { useState, ReactNode } from 'react';
import styles from './Inputs.module.scss';

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>, 'type' | 'onChange'> {
  type?: InputType;
  placeholder?: string;
  icon?: ReactNode;
  options?: string[]; 
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

  const validateInput = (value: string): boolean => {
    if (!value) return true;

    let isValidValue = true;
    let message = '';

    switch (type) {
      case 'email':
        isValidValue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        message = 'Please enter a valid email address';
        break;
      case 'tel':
        isValidValue = /^[\d\s+()-]{10,}$/.test(value);
        message = 'Please enter a valid phone number';
        break;
      case 'number':
        isValidValue = !isNaN(Number(value));
        message = 'Please enter a valid number';
        break;
      case 'url':
        isValidValue = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value);
        message = 'Please enter a valid URL';
        break;
      case 'date':
        isValidValue = !isNaN(Date.parse(value));
        message = 'Please enter a valid date';
        break;
    }

    if (customValidation) {
      isValidValue = isValidValue && customValidation(value);
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
      {options ? (
        <select
          className={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={handleChange}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt, index) => (
            <option key={`option-${opt}-${index}`} value={opt}>
              {opt}
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
      {icon && <div className={styles.icon}>{icon}</div>}
      {!isValid && errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;