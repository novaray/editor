import {HtmlElement} from '../interfaces/HtmlElement';

export class DelimiterType implements HtmlElement{
    
    getHtmlElement(): HTMLElement {
        return document.createElement('hr');
    }
}
