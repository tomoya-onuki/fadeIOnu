import { fadeIn, fadeOut } from 'fadeIOnu';

window.onload = (event) => {
    
    const elem: HTMLElement = <HTMLElement>document.querySelector("#a0");
    const durationSliderElem: HTMLInputElement = <HTMLInputElement>document.querySelector("#duration");
    const inElem: HTMLElement = <HTMLElement>document.querySelector("#in");
    
    inElem.addEventListener("click", () => {
        const duration = Number(durationSliderElem.value)
        fadeIn(elem, duration);
    });
    
    const outElem: HTMLElement = <HTMLElement>document.querySelector("#out")
    outElem.addEventListener("click", () => {
        const duration = Number(durationSliderElem.value);
        console.log(duration);
        fadeOut(elem, duration);
    });
};