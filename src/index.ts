import {getIframe, initEventHandler} from './scripts/Iframe';
const iframe = getIframe();
iframe.onload = () => {
    initEventHandler();
}

document.getElementById('app')?.appendChild(iframe);

window.addEventListener('message', (e) => {
    console.log(e.origin, e.data);
})
