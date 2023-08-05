"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeIn = void 0;
function fadeIn(elem, _duration, _display) {
    return new Promise(async (resolve) => {
        if (elem !== null) {
            const duration = _duration != null ? _duration : 500;
            const display = _display != null ? _display : 'block';
            const frameRate = 40;
            const coef = 1 / (duration / frameRate);
            elem.style.opacity = '0';
            elem.style.display = display;
            var opacity = Number(elem.style.opacity);
            var animation = setInterval(() => {
                opacity += coef;
                elem.style.opacity = String(opacity);
                if (opacity >= 1) {
                    clearInterval(animation);
                    resolve(true);
                }
            }, frameRate);
        }
    });
}
exports.fadeIn = fadeIn;
