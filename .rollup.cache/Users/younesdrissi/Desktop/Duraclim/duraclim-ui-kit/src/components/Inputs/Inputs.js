import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import styles from './Inputs.module.scss';
var Input = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, placeholder = _a.placeholder, icon = _a.icon, options = _a.options, _c = _a.value, value = _c === void 0 ? '' : _c, onChange = _a.onChange, customValidation = _a.customValidation, className = _a.className, props = __rest(_a, ["type", "placeholder", "icon", "options", "value", "onChange", "customValidation", "className"]);
    var _d = useState(false), isFocused = _d[0], setIsFocused = _d[1];
    var _e = useState(true), isValid = _e[0], setIsValid = _e[1];
    var _f = useState(''), errorMessage = _f[0], setErrorMessage = _f[1];
    var validateInput = function (value) {
        if (!value)
            return true;
        var isValidValue = true;
        var message = '';
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
    var handleChange = function (e) {
        var newValue = e.target.value;
        var isValidValue = validateInput(newValue);
        setIsValid(isValidValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue, isValidValue);
    };
    var handleFocus = function () { return setIsFocused(true); };
    var handleBlur = function () { return setIsFocused(false); };
    var combinedClasses = "\n    ".concat(styles.inputWrapper, " \n    ").concat(isFocused ? styles.focused : '', " \n    ").concat(!isValid ? styles.error : '', " \n    ").concat(className || '', "\n  ").trim();
    return (_jsxs("div", { className: combinedClasses, children: [options ? (_jsxs("select", __assign({ className: styles.input, onFocus: handleFocus, onBlur: handleBlur, value: value, onChange: handleChange }, props, { children: [_jsx("option", { value: "", disabled: true, hidden: true, children: placeholder }), options.map(function (opt, index) { return (_jsx("option", { value: opt, children: opt }, "option-".concat(opt, "-").concat(index))); })] }))) : (_jsx("input", __assign({ type: type, className: styles.input, placeholder: placeholder, value: value, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur }, props))), icon && _jsx("div", { className: styles.icon, children: icon }), !isValid && errorMessage && (_jsx("div", { className: styles.errorMessage, children: errorMessage }))] }));
};
export default Input;
//# sourceMappingURL=Inputs.js.map