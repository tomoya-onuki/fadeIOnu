"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeOut = void 0;
function fadeOut(elem, _duration) {
    return new Promise(async (resolve) => {
        if (elem !== null) {
            const duration = _duration != null ? _duration : 500;
            const frameRate = 40;
            const coef = 1 / (duration / frameRate);
            var opacity = Number(elem.style.opacity);
            elem.style.opacity = '1';
            var animation = setInterval(() => {
                opacity -= coef;
                elem.style.opacity = String(opacity);
                if (opacity <= 0) {
                    elem.style.display = 'none';
                    clearInterval(animation);
                    resolve(true);
                }
            }, frameRate);
        }
    });
}
exports.fadeOut = fadeOut;
