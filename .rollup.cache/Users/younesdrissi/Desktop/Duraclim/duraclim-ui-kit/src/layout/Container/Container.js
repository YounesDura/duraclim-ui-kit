import { jsx as _jsx } from "react/jsx-runtime";
import styles from './container.module.scss';
var getMaxWidth = function (size) {
    switch (size) {
        case 'narrow':
            return styles.narrow;
        case 'wide':
            return styles.wide;
        case 'full':
            return styles.full;
        default:
            return styles.default;
    }
};
var Container = function (_a) {
    var children = _a.children, _b = _a.maxWidth, maxWidth = _b === void 0 ? 'default' : _b, _c = _a.padding, padding = _c === void 0 ? true : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    var combinedClasses = [
        styles.container,
        getMaxWidth(maxWidth),
        padding ? styles.padding : '',
        className,
    ].filter(Boolean).join(' ');
    return (_jsx("div", { className: combinedClasses, children: children }));
};
export default Container;
//# sourceMappingURL=Container.js.map