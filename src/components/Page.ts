import {ParagraphType} from './ParagraphType';
import {HeaderType} from './HeaderType';
import {ListType} from './ListType';
import {CheckBoxType} from './CheckBoxType';
import {RadioButtonType} from './RadioButtonType';
import {ImageType} from './ImageType';
import {DelimiterType} from './DelimiterType';
import {Block, BlockDataType} from './Block';

export class Page {
    private _blocks?: Block[];
    private _time: string;
    
    constructor(time: string) {
        this._time = time;
    }
    
    get blocks(): Block[] {
        return this._blocks ?? [];
    }
    
    set blocks(value: Block[]) {
        this._blocks = value;
    }
    
    get time(): string {
        return this._time;
    }
    
    set time(value: string) {
        this._time = value;
    }
    
    public parseJson(json: string): Block[] {
        const blocks: Block[] = JSON.parse(json);
        const instanceBlocks:Block[] = [];
        
        blocks.forEach(t => {
            try {
                instanceBlocks.push(new Block(t.id, t.type, this.getInstance(t)))
            } catch (ex) {
                console.error(ex);
            }
        })
        
        return instanceBlocks;
    }
    
    private getInstance(obj: Block): BlockDataType {
        switch (obj.type) {
            case TypeKind.PARAGRAPH:
                const paragraph = obj.data as ParagraphType;
                return new ParagraphType(paragraph.text);
            case TypeKind.HEADER:
                const header = obj.data as HeaderType;
                return new HeaderType(header.level, header.text);
            case TypeKind.LIST:
                const list = obj.data as ListType;
                return new ListType(list.style, list.items);
            case TypeKind.CHECKBOX:
                const checkbox = obj.data as CheckBoxType;
                return new CheckBoxType(checkbox.items)
            case TypeKind.RADIOBUTTON:
                const radioButton = obj.data as RadioButtonType;
                return new RadioButtonType(radioButton.items);
            case TypeKind.IMAGE:
                const image = obj.data as ImageType;
                return new ImageType(image.url, image.caption, image?.withBorder, image?.stretched, image?.withBackground);
            case TypeKind.DELIMITER:
                return new DelimiterType();
            default:
                throw new Error('Json parse Error');
        }
    }
    
}

enum TypeKind {
    PARAGRAPH = 'PARAGRAPH',
    HEADER = 'HEADER',
    LIST = 'LIST',
    CHECKBOX = 'CHECKBOX',
    RADIOBUTTON = 'RADIOBUTTON',
    IMAGE = 'IMAGE',
    DELIMITER = 'DELIMITER'
}
