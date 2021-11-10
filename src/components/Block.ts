import {HtmlElement} from '../interfaces/HtmlElement';
import {BlockTypeKind} from '../types/BlockTypeKind';
import {CustomEventKind} from '../types/CustomEventKind';

export class Block implements HtmlElement {
  private _id: string;
  private _type: BlockTypeKind;
  private _data: HtmlElement;
  
  constructor(id: string, type: BlockTypeKind, data: HtmlElement) {
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
  
  get type(): BlockTypeKind {
    return this._type;
  }
  
  set type(value: BlockTypeKind) {
    this._type = value;
  }
  
  get data(): HtmlElement {
    return this._data;
  }
  
  set data(value: HtmlElement) {
    this._data = value;
  }
  
  public getHtmlElement(): HTMLElement {
    const div = document.createElement('div');
    const child = this.data.getHtmlElement();
  
    child.addEventListener('mouseup', (e) => {
      const selection = document.getSelection();
      if (selection && selection.toString() !== '') {
        console.log(selection.toString());
      }
    });
  
    child.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowUp':
        case 'ArrowDown':
          if (e.shiftKey) {
            console.log(e);
          }
      }
    });
    
    child.addEventListener('focus', (e) => {
      const element = e.target as Element;
      element.classList.add('focused');
    });
    
    child.addEventListener('blur', (e) => {
      const element = e.target as Element;
      element.classList.remove('focused');
      
      if (element.textContent == null || element.textContent.length === 0) {
        div.dispatchEvent(new CustomEvent(CustomEventKind.BLOCK_BLUR_REMOVE, {
          bubbles: true
        }));
      }
    });
    
    div.id = this.id;
    div.appendChild(child);
    return div;
  }
}
