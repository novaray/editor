import {getPage} from './scripts/MakeEditor';

document.getElementById('app')?.appendChild(getPage());

window.addEventListener('message', (e) => {
    console.log(e.origin, e.data);
});
