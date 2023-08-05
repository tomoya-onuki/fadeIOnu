import { fadeIn, fadeOut } from 'fadeIOnu';

window.onload = (event) => {
    
    const elem: HTMLElement = <HTMLElement>document.querySelector("#a0");
    const durationSliderElem: HTMLInputElement = <HTMLInputElement>document.querySelector("#duration");
    const inElem: HTMLElement = <HTMLElement>document.querySelector("#in");
    
    inElem.addEventListener("click", async () => {
        const duration = Number(durationSliderElem.value);
        await fadeIn(elem, duration);
        console.log("fadein !!");
    });
    
    const outElem: HTMLElement = <HTMLElement>document.querySelector("#out")
    outElem.addEventListener("click", async () => {
        const duration = Number(durationSliderElem.value);
        await fadeOut(elem, duration);
        console.log("fadeout !!");
    });
};