import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styles from './PageLayout.module.scss';
var PageLayout = function (_a) {
    var navbar = _a.navbar, sidebar = _a.sidebar, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (_jsxs("div", { className: "".concat(styles.page, " ").concat(className), children: [_jsx("div", { className: styles.navbar, children: navbar }), _jsxs("div", { className: styles.content, children: [_jsx("main", { className: styles.main, children: children }), sidebar && _jsx("aside", { className: styles.sidebar, children: sidebar })] })] }));
};
export default PageLayout;
//# sourceMappingURL=PageLayout.js.map