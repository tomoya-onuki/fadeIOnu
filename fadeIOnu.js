const frameRate = 40; // fps=25

export function fadeIn() {
    return new Promise(async (resolve, reject) => {
        if (arguments.length > 0) {
            const elem = arguments[0];
            if (elem.style.display === 'none' || elem.style.display === '') {
                const duration = arguments.length === 2 ? arguments[1] : 500;
                const display = arguments.length === 3 ? arguments[2] : 'block';
                elem.style.display = display;

                const coef = 1 / (duration / frameRate);
                elem.style.opacity = 0;
                var opacity = Number(elem.style.opacity);
                var animation = setInterval(() => {
                    opacity += coef;
                    elem.style.opacity = opacity;
                    if (opacity >= 1) {
                        clearInterval(animation);
                        resolve(true);
                    }
                }, frameRate);
            }
        }
    });
}

export async function fadeOut() {
    return new Promise(async (resolve, reject) => {
        if (arguments.length > 0) {
            const elem = arguments[0];
            if (elem.style.display !== 'none') {
                const duration = arguments.length === 2 ? arguments[1] : 500;

                const coef = 1 / (duration / frameRate);
                elem.style.opacity = 1.0;
                var opacity = Number(elem.style.opacity);
                var animation = setInterval(() => {
                    opacity -= coef;
                    elem.style.opacity = opacity;
                    if (opacity <= 0) {
                        elem.style.display = 'none';
                        clearInterval(animation);
                        resolve(true);
                    }
                }, frameRate);
            }
        }
    });
}