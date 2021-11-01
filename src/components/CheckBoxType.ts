import {HtmlElement} from '../interface/HtmlElement';

export class CheckBoxType implements HtmlElement{
    private _items: CheckBoxItem[];
    
    constructor(items: CheckBoxItem[]) {
        this._items = items;
    }
    
    get items(): CheckBoxItem[] {
        return this._items;
    }
    
    set items(value: CheckBoxItem[]) {
        this._items = value;
    }
    
    public getHtmlElement() {
        const parentDiv = document.createElement('div');
        parentDiv.contentEditable = 'true';
        
        this._items.forEach(t => {
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.id = t.value;
            if (t.checked) {
                checkbox.checked = true;
            }
            
            const label = document.createElement('label');
            const text= document.createTextNode(t.label);
            label.appendChild(text);
            // label이랑 checkbox랑 묶으면 화면에서 텍스트 수정 못해서 불가 처리
            // label.htmlFor = t.value;
            
            parentDiv.appendChild(checkbox);
            parentDiv.appendChild(label);
        });
        
        return parentDiv;
    }
}

interface CheckBoxItem {
    value: string;
    label: string;
    checked: boolean;
}
