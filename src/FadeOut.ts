export function fadeOut(elem: HTMLElement, _duration?: number) {
    return new Promise(async (resolve) => {
        if (elem !== null) {
            const duration: number = _duration != null ? _duration : 500;

            const frameRate: number = 40;
            const coef: number = 1 / (duration / frameRate);
            var opacity: number = Number(elem.style.opacity);
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