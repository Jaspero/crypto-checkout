var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'qr-code-styling/lib/qr-code-styling.js';
import { css, customElement, html, LitElement, property, query } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
let CryptoDialog = class CryptoDialog extends LitElement {
    constructor() {
        super(...arguments);
        this.message = '';
        this.waitForConfirmation = false;
        this.target = false;
        this.hasTime = true;
        this.loading = false;
        this.paid = false;
    }
    get service() {
        return window.jpCrypto.service;
    }
    get coins() {
        return window.jpCrypto.coins;
    }
    connectedCallback() {
        super.connectedCallback();
    }
    coinsTemp() {
        const coinTemp = (c) => html `<button class="coin" data-id="${c.id}" @click="${this.coinSelected}">
        ${unsafeHTML(c.icon)}
        <span>${c.label}</span>
      </button>`;
        return html `<div class="coins">${this.coins.map(coin => coinTemp(coin))}</div>`;
    }
    payTemp() {
        if (this.hasTime) {
            if (this.error) {
                return html `
          <div class="error">
            <p>${this.error}</p>
          </div>`;
            }
            return html `
        <slot name="instructions"></slot>
        <crypto-timer time="15:00" @finished="${this.timeOut}"></crypto-timer>
        <div id="jp-c-qr"></div>
        <div>
          <div>${this.displayedCoinValue}</div>
          <input readonly value="${this.coin.wallet}" />
          <button @click="${() => this.selectCoin('')}">Back</button>
          <button @click="${() => this.confirmPay()}">Confirm Payment</button>
        </div>      
      `;
        }
        return html `
      <div class="time-out">
        <p>Timeout elapsed for this order.</p>
        <button @click="${() => this.selectCoin(this.coin.id)}">Update Rate</button>
        <button @click="${() => this.selectCoin('')}">Select Different Coin</button>
      </div>`;
    }
    paidTemp() {
        return html `<slot name="paid"></slot>`;
    }
    render() {
        let view;
        if (this.paid) {
            view = this.paidTemp();
        }
        else if (this.coin) {
            view = this.payTemp();
        }
        else {
            view = this.coinsTemp();
        }
        if (this.target) {
            return html `
        ${this.loading && html `<div class="loading"></div>` || ''}
        ${view}
      `;
        }
        return html `
      <article class="dialog">
        <header class="dialog-header">
          <button class="dialog-header-button" @click="${this.close}">Close</button>
        </header>
        <main class="dialog-content">
          ${this.loading && html `<div class="loading"></div>` || ''}
          ${view}
        </main>
      </article>
    `;
    }
    async coinSelected(event) {
        const target = event.target;
        await this.selectCoin(target.dataset.id);
    }
    async selectCoin(coin) {
        this.coin = coin ? this.coins.find(it => it.id === coin) : null;
        if (this.coin) {
            this.coinValue = await this.coin.rate(this.value);
            this.displayedCoinValue = this.coin.format(this.coinValue);
            this.hasTime = true;
            await this.updateComplete;
            this.renderQr();
        }
    }
    renderQr() {
        const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            data: this.coin.qr(this.coinValue, this.message),
            image: 'data:image/svg+xml;base64,' + window.btoa(this.coin.icon),
            imageOptions: {
                margin: 10
            },
            dotsOptions: {
                color: this.coin.color,
                type: 'rounded'
            },
            backgroundOptions: {
                color: '#e9ebee',
            }
        });
        qrCode.append(this._qrEl);
    }
    timeOut() {
        this.hasTime = false;
    }
    close() {
        this.parentNode.removeChild(this);
    }
    async confirmPay() {
        if (this.waitForConfirmation) {
            const { success, error } = await this.service.confirmPayment(this.coinValue, this.message);
            if (!success) {
                this.error = error;
                return;
            }
        }
        this.dispatchEvent(new CustomEvent('paid', {
            detail: {
                coin: this.coin.id,
                amount: this.coinValue
            }
        }));
        this.paid = true;
    }
};
CryptoDialog.styles = css `
    :host {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      overflow: auto;
      background: rgba(0,0,0,.35);
    }

    .dialog {
      margin: auto;
      background: white;
      overflow: hidden;
      border-radius: 1rem;
    }
    
    .coins {
      display: flex;
      flex-direction: column;
    }
    
    .coin {
      border: none;
      width: 200px;
      display: flex;
      align-items: center;
    }
    
    .coin > span {
      pointer-events: none;
    }
    
    .coin > svg {
      width: 40px;
      height: 40px;
      pointer-events: none;
    }  
  `;
__decorate([
    property()
], CryptoDialog.prototype, "message", void 0);
__decorate([
    property({ converter: k => k === 'true' })
], CryptoDialog.prototype, "waitForConfirmation", void 0);
__decorate([
    property({ converter: k => k === 'true' })
], CryptoDialog.prototype, "target", void 0);
__decorate([
    property()
], CryptoDialog.prototype, "hasTime", void 0);
__decorate([
    property()
], CryptoDialog.prototype, "loading", void 0);
__decorate([
    property()
], CryptoDialog.prototype, "paid", void 0);
__decorate([
    property()
], CryptoDialog.prototype, "error", void 0);
__decorate([
    property({ converter: (k) => parseInt(k, 10) })
], CryptoDialog.prototype, "value", void 0);
__decorate([
    property()
], CryptoDialog.prototype, "coinValue", void 0);
__decorate([
    property()
], CryptoDialog.prototype, "displayedCoinValue", void 0);
__decorate([
    property()
], CryptoDialog.prototype, "coin", void 0);
__decorate([
    query('#jp-c-qr')
], CryptoDialog.prototype, "_qrEl", void 0);
CryptoDialog = __decorate([
    customElement('crypto-dialog')
], CryptoDialog);
export { CryptoDialog };
//# sourceMappingURL=crypto-dialog.js.map