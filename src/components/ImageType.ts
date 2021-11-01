import {HtmlElement} from '../interfaces/HtmlElement';

export class ImageType implements HtmlElement{
    private _url: string;
    private _caption: string;
    private _withBorder: boolean;
    private _stretched: boolean
    private _withBackground: boolean
    
    constructor(url: string, caption: string, withBorder: boolean = false, stretched: boolean = false, withBackground: boolean = false) {
        this._url = url;
        this._caption = caption;
        this._withBorder = withBorder;
        this._stretched = stretched;
        this._withBackground = withBackground;
    }
    
    get url(): string {
        return this._url;
    }
    
    set url(value: string) {
        this._url = value;
    }
    
    get caption(): string {
        return this._caption;
    }
    
    set caption(value: string) {
        this._caption = value;
    }
    
    get withBorder(): boolean {
        return this._withBorder;
    }
    
    set withBorder(value: boolean) {
        this._withBorder = value;
    }
    
    get stretched(): boolean {
        return this._stretched;
    }
    
    set stretched(value: boolean) {
        this._stretched = value;
    }
    
    get withBackground(): boolean {
        return this._withBackground;
    }
    
    set withBackground(value: boolean) {
        this._withBackground = value;
    }
    
    getHtmlElement(): HTMLElement {
        //TODO
        return document.createElement('div');
    }
}
