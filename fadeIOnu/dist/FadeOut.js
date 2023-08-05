"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeOut = void 0;
function fadeOut(elem, _duration) {
    if (elem !== null) {
        const duration = _duration != null ? _duration : 500;
        const firstDisplay = elem.style.display !== '' ? elem.style.display : 'block';
        elem.animate([
            { opacity: '1', display: firstDisplay },
            { opacity: '0', display: 'none' }
        ], {
            duration: duration
        });
        elem.style.display = 'none';
    }
}
exports.fadeOut = fadeOut;
