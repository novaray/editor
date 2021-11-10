import {HtmlElement} from '../interfaces/HtmlElement';

export class HeaderType implements HtmlElement {
    private _level: Level
    private _text: string;
    
    constructor(level: Level, text: string) {
        this._level = level;
        this._text = text;
    }
    
    get level(): Level {
        return this._level;
    }
    
    set level(value: Level) {
        this._level = value;
    }
    
    get text(): string {
        return this._text;
    }
    
    set text(value: string) {
        this._text = value;
    }
    
    getHtmlElement(): HTMLElement {
        const hTag = document.createElement(`h${this.level}`);
        const text = document.createTextNode(this.text);
        
        hTag.appendChild(text);
        hTag.contentEditable = 'true';
    
        return hTag;
    }
}

enum Level {
    ONE = 1,
    TWO,
    THREE
}
