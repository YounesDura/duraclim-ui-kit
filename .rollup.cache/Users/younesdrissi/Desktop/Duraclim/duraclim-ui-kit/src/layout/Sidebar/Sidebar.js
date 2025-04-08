import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styles from './Sidebar.module.scss';
var Sidebar = function (_a) {
    var _b = _a.position, position = _b === void 0 ? 'right' : _b, children = _a.children, _c = _a.className, className = _c === void 0 ? '' : _c, maxWidth = _a.maxWidth;
    var sidebarClass = "".concat(styles.sidebar, " ").concat(position === 'left' ? styles.left : styles.right, " ").concat(className).trim();
    return (_jsx("aside", { className: sidebarClass, style: { maxWidth: maxWidth }, children: _jsx("div", { children: children }) }));
};
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map