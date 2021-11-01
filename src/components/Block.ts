import {ParagraphType} from './ParagraphType';
import {HeaderType} from './HeaderType';
import {ListType} from './ListType';
import {CheckBoxType} from './CheckBoxType';
import {RadioButtonType} from './RadioButtonType';
import {ImageType} from './ImageType';
import {DelimiterType} from './DelimiterType';
import {HtmlElement} from '../interface/HtmlElement';

export type BlockDataType =
    | ParagraphType
    | HeaderType
    | ListType
    | CheckBoxType
    | RadioButtonType
    | ImageType
    | DelimiterType

export class Block implements HtmlElement{
    private _id: string;
    private _type: string;
    private _data: BlockDataType;
    
    constructor(id: string, type: string, data: BlockDataType) {
        this._id = id;
        this._type = type;
        this._data = data;
    }
    
    get id(): string {
        return this._id;
    }
    
    set id(value: string) {
        this._id = value;
    }
    
    get type(): string {
        return this._type;
    }
    
    set type(value: string) {
        this._type = value;
    }
    
    get data(): BlockDataType {
        return this._data;
    }
    
    set data(value: BlockDataType) {
        this._data = value;
    }
    
    getHtmlElement(): HTMLElement {
        const div = document.createElement('div');
        const child = this.data.getHtmlElement();
        
        div.appendChild(child);
        return div;
    }
}
