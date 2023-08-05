export function fadeIn(elem: HTMLElement, _duration?: number, _display?: string) {
    return new Promise(async (resolve) => {
        if (elem !== null) {
            const duration: number = _duration != null ? _duration : 500;
            const display: string = _display != null ? _display : 'block';

            const frameRate: number = 40;
            const coef: number = 1 / (duration / frameRate);
            elem.style.opacity = '0';
            elem.style.display = display;
            var opacity: number = Number(elem.style.opacity);
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