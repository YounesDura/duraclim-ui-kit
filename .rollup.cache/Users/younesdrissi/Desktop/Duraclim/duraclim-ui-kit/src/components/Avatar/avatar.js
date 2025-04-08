import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styles from './avatar.module.scss';
import fallbackImage from '../../../assets/illustrations/person.png';
var sizeMap = {
    sm: 48,
    md: 96,
    lg: 128,
};
var Avatar = function (_a) {
    var image = _a.image, _b = _a.alt, alt = _b === void 0 ? 'User avatar' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.size, size = _d === void 0 ? 'sm' : _d;
    var dimensions = sizeMap[size];
    return (_jsx("div", { className: "".concat(styles.avatarWrapper, " ").concat(className), style: { width: "".concat(dimensions, "px"), height: "".concat(dimensions, "px") }, children: _jsx("img", { src: image || fallbackImage, alt: alt, className: styles.avatarImage }) }));
};
export default Avatar;
//# sourceMappingURL=avatar.js.map