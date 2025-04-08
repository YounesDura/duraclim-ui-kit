import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useMemo } from 'react';
import styles from './button.module.scss';
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, text = _a.text, icon = _a.icon, dropdownOptions = _a.dropdownOptions, onClick = _a.onClick, className = _a.className, props = __rest(_a, ["variant", "text", "icon", "dropdownOptions", "onClick", "className"]);
    if (!text && !icon) {
        console.warn('Button should have either text or icon');
        return null;
    }
    var isDropdown = useMemo(function () {
        return ['dropdown', 'dropdownGhost'].includes(variant);
    }, [variant]);
    var combinedClasses = useMemo(function () {
        return "".concat(styles.button, " ").concat(styles[variant] || '', " ").concat(className || '').trim();
    }, [variant, className]);
    var renderContent = function () {
        if (isDropdown) {
            return (_jsxs("div", { className: styles.dropdownContent, children: [icon && _jsx("span", { className: styles.icon, children: icon }), text && _jsx("span", { className: styles.text, children: text }), _jsx("span", { className: styles.arrow, children: "\u25BC" })] }));
        }
        return (_jsxs(_Fragment, { children: [icon && _jsx("span", { className: styles.icon, children: icon }), text && _jsx("span", { className: styles.text, children: text })] }));
    };
    return (_jsxs("button", __assign({ type: "button", className: combinedClasses, onClick: variant !== 'deactivate' ? onClick : undefined, disabled: variant === 'deactivate' }, props, { children: [renderContent(), isDropdown && dropdownOptions && (_jsx("ul", { className: styles.dropdownMenu, children: dropdownOptions.map(function (option, index) { return (_jsx("li", { onClick: option.onClick, children: option.label }, "dropdown-option-".concat(index))); }) }))] })));
};
export default Button;
//# sourceMappingURL=button.js.map