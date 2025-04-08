import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styles from './card.module.scss';
var Card = function (_a) {
    var image = _a.image, title = _a.title, price = _a.price, itemsCount = _a.itemsCount, isSelected = _a.isSelected, isAdded = _a.isAdded, _b = _a.mode, mode = _b === void 0 ? 'select' : _b, onEdit = _a.onEdit, onSelect = _a.onSelect;
    var handleSelect = function () {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
    };
    var handleEditClick = function (e) {
        e.stopPropagation();
        onEdit === null || onEdit === void 0 ? void 0 : onEdit();
    };
    var showRadio = mode === 'select';
    var showPlus = mode === 'add';
    return (_jsxs("div", { className: "".concat(styles.card, " ").concat(isSelected || isAdded ? styles.active : ''), onClick: handleSelect, children: [_jsxs("div", { className: styles.cardHeader, children: [showRadio && (_jsx("div", { className: "".concat(styles.radio, " ").concat(isSelected ? 'active' : ''), children: isSelected && _jsx("div", { className: styles.radioDot }) })), showPlus && (_jsxs("div", { className: styles.addedGroup, children: [_jsx("div", { className: "".concat(styles.plus, " ").concat(isAdded ? styles.plusActive : ''), children: "\uFF0B" }), isAdded && (_jsxs("div", { className: styles.countChip, children: [_jsx("span", { className: styles.countNumber, children: itemsCount }), _jsx("span", { className: styles.countText, children: "items" })] }))] })), onEdit && (_jsx("button", { className: styles.editButton, onClick: handleEditClick, children: "\u270F\uFE0F" }))] }), _jsx("div", { className: styles.imageWrapper, children: _jsx("img", { src: image, alt: title }) }), _jsx("div", { className: styles.title, children: title }), price !== undefined && (_jsxs("div", { className: styles.price, children: [price, " $"] }))] }));
};
export default Card;
//# sourceMappingURL=cards.js.map