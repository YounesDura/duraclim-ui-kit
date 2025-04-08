import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styles from './cardService.module.scss';
import Button from '../Button/button';
var CardService = function (_a) {
    var image = _a.image, label = _a.label, title = _a.title, price = _a.price, quantity = _a.quantity, traps = _a.traps, onQuantityChange = _a.onQuantityChange, onTrapsChange = _a.onTrapsChange, onDelete = _a.onDelete, onQuantityAction = _a.onQuantityAction, onTrapsAction = _a.onTrapsAction;
    var handleDecrement = function (type) {
        if (type === 'qty' && quantity > 1) {
            onQuantityChange === null || onQuantityChange === void 0 ? void 0 : onQuantityChange(quantity - 1);
            onQuantityAction === null || onQuantityAction === void 0 ? void 0 : onQuantityAction('decrement', quantity - 1);
        }
        if (type === 'traps' && traps > 0) {
            onTrapsChange === null || onTrapsChange === void 0 ? void 0 : onTrapsChange(traps - 1);
            onTrapsAction === null || onTrapsAction === void 0 ? void 0 : onTrapsAction('decrement', traps - 1);
        }
    };
    var handleIncrement = function (type) {
        if (type === 'qty') {
            onQuantityChange === null || onQuantityChange === void 0 ? void 0 : onQuantityChange(quantity + 1);
            onQuantityAction === null || onQuantityAction === void 0 ? void 0 : onQuantityAction('increment', quantity + 1);
        }
        if (type === 'traps') {
            onTrapsChange === null || onTrapsChange === void 0 ? void 0 : onTrapsChange(traps + 1);
            onTrapsAction === null || onTrapsAction === void 0 ? void 0 : onTrapsAction('increment', traps + 1);
        }
    };
    return (_jsxs("div", { className: styles.card, children: [_jsx("div", { className: styles.imageBox, children: _jsx("img", { src: image, alt: "Service" }) }), _jsxs("div", { className: styles.info, children: [label && (_jsx("span", { className: "".concat(styles.label, " ").concat(styles[label]), children: label.charAt(0).toUpperCase() + label.slice(1) })), _jsx("div", { className: styles.title, children: title }), _jsxs("div", { className: styles.price, children: ["$", price.toFixed(2)] })] }), _jsxs("div", { className: styles.controls, children: [_jsx(Button, { className: styles.delete, variant: "cancel", icon: "\uD83D\uDDD1\uFE0F", onClick: onDelete }), _jsxs("div", { className: styles.counterGroup, children: [_jsx("label", { children: "Traps:" }), _jsxs("div", { className: styles.counter, children: [_jsx("button", { onClick: function () { return handleDecrement('traps'); }, children: "\u2013" }), _jsx("span", { children: String(traps).padStart(2, '0') }), _jsx("button", { onClick: function () { return handleIncrement('traps'); }, children: "\uFF0B" })] })] }), _jsxs("div", { className: styles.counterGroup, children: [_jsx("label", { children: "Qty:" }), _jsxs("div", { className: styles.counter, children: [_jsx("button", { onClick: function () { return handleDecrement('qty'); }, children: "\u2013" }), _jsx("span", { children: String(quantity).padStart(2, '0') }), _jsx("button", { onClick: function () { return handleIncrement('qty'); }, children: "\uFF0B" })] })] })] })] }));
};
export default CardService;
//# sourceMappingURL=cardService.js.map