var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property, queryAssignedNodes } from 'lit-element';
let CryptoTrigger = class CryptoTrigger extends LitElement {
    render() {
        return html `
      <button @click="${() => this.open()}">
        <slot></slot>
        <slot name="intro"></slot>
        <slot name="paid"></slot>
      </button>  
    `;
    }
    open() {
        window.jpCrypto.open(Object.assign(Object.assign({ value: this.value, message: this.message }, this._intro && this._intro.length && { instructionsTemplate: this._intro[0].innerHTML }), this._paid && this._paid.length && { paidTemplate: this._paid[0].innerHTML }));
    }
};
CryptoTrigger.styles = css `
    .hidden {display: none}
  `;
__decorate([
    property({ converter: k => parseFloat(k) })
], CryptoTrigger.prototype, "value", void 0);
__decorate([
    property()
], CryptoTrigger.prototype, "message", void 0);
__decorate([
    queryAssignedNodes('intro')
], CryptoTrigger.prototype, "_intro", void 0);
__decorate([
    queryAssignedNodes('paid')
], CryptoTrigger.prototype, "_paid", void 0);
CryptoTrigger = __decorate([
    customElement('crypto-trigger')
], CryptoTrigger);
export { CryptoTrigger };
//# sourceMappingURL=crypto-trigger.js.map