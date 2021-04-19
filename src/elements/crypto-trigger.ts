import {css, customElement, html, LitElement, property, queryAssignedNodes} from 'lit-element';

@customElement('crypto-trigger')
export class CryptoTrigger extends LitElement {
  @property({converter: k => parseFloat(k)}) value: number;
  @property() message: string;

  static styles = css`
    .hidden {display: none}
  `;

  @queryAssignedNodes('intro')
  _intro: HTMLElement[];

  @queryAssignedNodes('paid')
  _paid: HTMLElement[];

  render() {
    return html`
      <button @click="${() => this.open()}">
        <slot></slot>
        <slot name="intro"></slot>
        <slot name="paid"></slot>
      </button>  
    `;
  }

  open() {
    window.jpCrypto.open({
      value: this.value,
      message: this.message,
      ...this._intro && this._intro.length && {instructionsTemplate: this._intro[0].innerHTML},
      ...this._paid && this._paid.length && {paidTemplate: this._paid[0].innerHTML}
    })
  }
}
