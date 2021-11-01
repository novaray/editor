import {HtmlElement} from '../interfaces/HtmlElement';

export class RadioButtonType implements HtmlElement{
    private _items: RadioButtonItem[];
    
    constructor(items: RadioButtonItem[]) {
        this._items = items;
    }
    
    get items(): RadioButtonItem[] {
        return this._items;
    }
    
    set items(value: RadioButtonItem[]) {
        this._items = value;
    }
    
    getHtmlElement(): HTMLElement {
        const parentDiv = document.createElement('div');
        parentDiv.contentEditable = 'true';
        
        this._items.forEach(t => {
            const radioButton = document.createElement('input');
            radioButton.setAttribute('type', 'radio');
            radioButton.id = t.value;
            if(t.checked) {
                radioButton.checked = true;
            }
        
            const label = document.createElement('label');
            // label이랑 radio button이랑 묶으면 화면에서 텍스트 수정 못해서 불가 처리
            // label.htmlFor = t.value;
        
            parentDiv.appendChild(radioButton);
            parentDiv.appendChild(label);
        });
    
        return parentDiv;
    }
}

interface RadioButtonItem {
    value: string;
    label: string;
    checked: boolean;
}

