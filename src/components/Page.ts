import {ParagraphType} from './ParagraphType';
import {HeaderType} from './HeaderType';
import {ListType} from './ListType';
import {CheckBoxType} from './CheckBoxType';
import {RadioButtonType} from './RadioButtonType';
import {ImageType} from './ImageType';
import {DelimiterType} from './DelimiterType';
import {Block} from './Block';
import {BlockTypeKind} from '../types/BlockTypeKind';
import {HtmlElement} from '../interfaces/HtmlElement';
import {getUuid} from '../utils/CommonUtils'

export class Page {
  private _blocks?: Block[];
  private _time: string;
  private _rootDiv: HTMLDivElement;
  
  constructor(time: string) {
    this._time = time;
    this._rootDiv = document.createElement('div');
    this._rootDiv.style.height = '500px';
    this._rootDiv.style.width = '500px';
    this._rootDiv.style.overflow = 'scroll';
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
  
  get rootDiv(): HTMLDivElement {
    return this._rootDiv;
  }
  
  public parseJson(json: string): Block[] {
    const blocks: Block[] = JSON.parse(json);
    const instanceBlocks: Block[] = [];
    
    blocks.forEach(t => {
      try {
        const block = new Block(t.id, t.type, this.getInstance(t));
        let htmlElement = block.getHtmlElement();
        this.handleKeyDown(htmlElement, t.id, t.type);
        instanceBlocks.push(block)
        this.rootDiv.appendChild(htmlElement);
      } catch (ex) {
        console.error(ex);
      }
    })
    
    return instanceBlocks;
  }
  
  private getInstance(obj: Block): HtmlElement {
    switch (obj.type) {
      case BlockTypeKind.PARAGRAPH:
        const paragraph = obj.data as ParagraphType;
        return new ParagraphType(paragraph.text);
      case BlockTypeKind.HEADER:
        const header = obj.data as HeaderType;
        return new HeaderType(header.level, header.text);
      case BlockTypeKind.LIST:
        const list = obj.data as ListType;
        return new ListType(list.style, list.items);
      case BlockTypeKind.CHECKBOX:
        const checkbox = obj.data as CheckBoxType;
        return new CheckBoxType(checkbox.items)
      case BlockTypeKind.RADIOBUTTON:
        const radioButton = obj.data as RadioButtonType;
        return new RadioButtonType(radioButton.items);
      case BlockTypeKind.IMAGE:
        const image = obj.data as ImageType;
        return new ImageType(image.url, image.caption, image?.withBorder, image?.stretched, image?.withBackground);
      case BlockTypeKind.DELIMITER:
        return new DelimiterType();
      default:
        throw new Error('Json parse Error');
    }
  }
  
  private handleKeyDown(div: HTMLElement, id: string, type: BlockTypeKind) {
    div.onkeydown = (e) => {
      if (e.isComposing) {  //IME 입력 시 enter 칠 경우 이벤트 두 번 방지.
        return;
      }
      
      if (e.key === 'Enter' && e.shiftKey) {
        if (type === BlockTypeKind.LIST || type === BlockTypeKind.CHECKBOX) {
          e.preventDefault();
          this.appendNewBlock(id);
        }
      } else if (e.key === 'Enter' && !e.shiftKey) {
        if (type !== BlockTypeKind.LIST && type !== BlockTypeKind.CHECKBOX) {
          e.preventDefault();
          this.appendNewBlock(id);
        }
      }
    }
  }
  
  private appendNewBlock(id: string) {
    const uuid = getUuid();
    const block = new Block(uuid, BlockTypeKind.PARAGRAPH, new ParagraphType(''));
    const htmlElement = block.getHtmlElement();
    const index = this.blocks.findIndex(t => t.id === id);
    
    this.blocks.splice(index, 0, block);
    this.rootDiv.insertBefore(htmlElement, this.rootDiv.children[index + 1]);
    this.handleKeyDown(htmlElement, id, block.type);
    // @ts-ignore
    this.rootDiv.querySelector(`#${uuid} > p`)?.focus();
  }
  
}
