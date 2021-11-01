import {HtmlElement} from '../interface/HtmlElement';

export class DelimiterType implements HtmlElement{
    
    getHtmlElement(): HTMLElement {
        return document.createElement('hr');
    }
}
