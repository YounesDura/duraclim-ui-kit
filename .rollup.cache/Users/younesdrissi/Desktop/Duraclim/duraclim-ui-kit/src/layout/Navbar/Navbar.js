import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Navbar.module.scss';
import Container from '../Container/Container';
var Navbar = function (_a) {
    var logo = _a.logo, right = _a.right, className = _a.className;
    return (_jsx("header", { className: "".concat(styles.navbar, " ").concat(className || ''), children: _jsx(Container, { maxWidth: "wide", padding: false, children: _jsxs("div", { className: styles.inner, children: [_jsx("div", { className: styles.logo, children: logo }), _jsx("div", { className: styles.right, children: right })] }) }) }));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map