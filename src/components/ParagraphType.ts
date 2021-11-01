import {HtmlElement} from '../interfaces/HtmlElement';

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
        
        const doc = new DOMParser().parseFromString(this.text, 'text/html');
        const p = document.createElement('p');
        p.appendChild(doc.body);
        div.appendChild(p);
        
        return div;
    }
}
