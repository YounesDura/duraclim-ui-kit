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
  isSearchable?: boolean;
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
  isSearchable,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (optionValue: string) => {
    onChange?.(optionValue, true);
    setIsOpen(false);
    setSearchTerm('');
  };

  const filteredOptions = options?.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={combinedClasses}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {type === 'select' ? (
        <div className={styles.selectWrapper}>
          <div 
            className={styles.input}
            onClick={handleSelectClick}
          >
            {icon && <div className={styles.icon}>{icon}</div>}
            <span className={styles.selectText}>
              {value ? options?.find(opt => opt.value === value)?.label : placeholder}
            </span>
          </div>
          
          {isOpen && (
            <div className={styles.dropdown}>
              <div className={styles.optionsList}>
                {filteredOptions?.map((opt) => (
                  <div
                    key={opt.value}
                    className={styles.option}
                    onClick={() => handleOptionSelect(opt.value)}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
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