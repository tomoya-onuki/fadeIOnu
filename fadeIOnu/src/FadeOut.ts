export function fadeOut(elem: HTMLElement, _duration?: number) {
    if (elem !== null) {
        const duration: number = _duration != null ? _duration : 500;
        const firstDisplay: string = elem.style.display !== '' ? elem.style.display : 'block';

        elem.animate([
            { opacity: '1', display: firstDisplay },
            { opacity: '0', display: 'none' }
        ], {
            duration: duration
        });
        elem.style.display = 'none';
    }
}