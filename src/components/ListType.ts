import {HtmlElement} from '../interfaces/HtmlElement';
import {BlockTypeKind} from '../types/BlockTypeKind';

export class ListType implements HtmlElement{
    private _style: ListKind
    private _items: string[]
    
    constructor(style: ListKind, items: string[]) {
        this._style = style;
        this._items = items;
    }
    
    get style(): ListKind {
        return this._style;
    }
    
    set style(value: ListKind) {
        this._style = value;
    }
    
    get items(): string[] {
        return this._items;
    }
    
    set items(value: string[]) {
        this._items = value;
    }
    
    get instanceType(): BlockTypeKind {
        return BlockTypeKind.LIST;
    }
    
    getHtmlElement(): HTMLElement {
        const div = document.createElement('div');
        const list = document.createElement(this.style === ListKind.ORDERED ? 'ol' : 'ul');
        this.items.forEach(t => {
            const li = document.createElement('li');
            const text = document.createTextNode(t);
            
            li.appendChild(text);
            list.appendChild(li);
        });
        list.contentEditable = 'true';
        
        div.appendChild(list);
        return div;
    }
}

enum ListKind {
    ORDERED = 'ordered',
    UNORDERED = 'unordered'
}
