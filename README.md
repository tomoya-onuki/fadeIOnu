# fadeIOnu.js
##### (c) 2023 Tomoya Onuki.  
(Date Issued) 2023.08.05  
(Last Update) 2023.08.05  

## Introduction
This package provides functions to fade in and out html elements.

It can be treated like jquery's fadein() and fadeout() method.

<div style="height: 40px"></div>

## Usage
### Installation
```sh
npm install https://github.com/tomoya-onuki/fadeIOnu.js/
```
### Coeding
```ts
import { fadeIn, fadeOut } from 'fadeionu';

const elem: HTMLElement = <HTMLElement>document.querySelector("#elem");
const duration: number = 600;
await fadeIn(elem, duration, 'block');
await fadeOut(elem, duration);
console.log("done");
```

<div style="height: 40px"></div>

## Method
### fadeIn()
```
fadeIn(element, duration?, display?);
```

1. `element` : HTMLElement   
DOM element you want to fade in.

2. `duration` : number  
Duration on fade in.

3. `display` : String  
Display style when displayed. (`block`, `inline`, `inline-block`, `flex`, `inline-flex` etc...)  
For more information, please visit [https://developer.mozilla.org/ja/docs/Web/CSS/display](https://developer.mozilla.org/ja/docs/Web/CSS/display)


### fadeOut()
```
fadeOut(element, duration?);
```

1. `element` : HTMLElement   
DOM element you want to fade out.

2. `duration` : number  
Duration on fade out.

