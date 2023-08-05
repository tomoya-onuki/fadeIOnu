"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeIn = void 0;
function fadeIn(elem, _duration, _display) {
    if (elem !== null) {
        const duration = _duration != null ? _duration : 500;
        const display = _display != null ? _display : 'block';
        elem.style.display = display;
        elem.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: duration
        });
    }
}
exports.fadeIn = fadeIn;
