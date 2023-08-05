export function fadeIn(elem: HTMLElement, _duration?: number, _display?: string) {
    if (elem !== null) {
        const duration: number = _duration != null ? _duration : 500;
        const display: string = _display != null ? _display : 'block';

        elem.style.display = display;
        elem.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: duration
        });
    }
}