import {HtmlElement} from '../interface/HtmlElement';

export class ParagraphType implements HtmlElement{
    private _text: string;
    
    constructor(text: string) {
        this._text = text;
    }
    
    get text(): string {
        return this._text;
    }
    
    set text(value: string) {
        this._text = value;
    }
    
    getHtmlElement(): HTMLElement {
        const div = document.createElement('div');
        div.contentEditable = 'true';
        
        const p = document.createElement('p');
        const text = document.createTextNode(this.text);
        p.appendChild(text);
        div.appendChild(p);
        
        return div;
    }
}
