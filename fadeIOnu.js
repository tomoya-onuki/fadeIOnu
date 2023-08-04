export function fadeIn() {
    if (arguments.length > 0) {
        const elem = arguments[0];
        if (elem.style.display === 'none' || elem.style.display === '') {
            const duration = arguments.length === 2 ? arguments[1] : 500;
            const display = arguments.length === 3 ? arguments[2] : 'block';
            elem.style.display = display;
            elem.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], {
                duration: duration
            });
        }
    }
}

export function fadeOut() {
    if (arguments.length > 0) {
        const elem = arguments[0];
        if (elem.style.display !== 'none') {
            const firstDisplay = elem.style.display !== '' ? elem.style.display : 'block';
            const duration = arguments.length === 2 ? arguments[1] : 500;
            elem.animate([
                { opacity: '1', display: firstDisplay },
                { opacity: '0', display: 'none' }
            ], {
                duration: duration
            });
            elem.style.display = 'none';
        }
    }
}