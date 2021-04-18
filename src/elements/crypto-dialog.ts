import 'qr-code-styling/lib/qr-code-styling.js';
import {css, customElement, html, LitElement, property, query} from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {Coin} from '../types/coin.class';
import {CryptoService} from '../types/crypto.service';

@customElement('crypto-dialog')
export class CryptoDialog extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
    }
    .dialog {
      position: fixed;
      margin: auto;
      background: white;
      width: 500px;
      height: 500px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
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

  @property() message = '';
  @property({converter: k => k === 'true'}) waitForConfirmation = false;
  @property() hasTime = true;
  @property() loading = false;

  @property() paid = false;
  @property() error: string;

  @property({converter: (k) => parseInt(k, 10)}) value: number;
  @property() coinValue: number;
  @property() displayedCoinValue: string;

  @property() coin: Coin;

  @query('#jp-c-qr')
  _qrEl: HTMLDivElement;

  get service() {
    return window.jpCrypto.service as CryptoService;
  }

  get coins() {
    return window.jpCrypto.coins;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  coinsTemp() {
    const coinTemp = (c) =>
      html`<button class="coin" data-id="${c.id}" @click="${this.coinSelected}">
        ${unsafeHTML(c.icon)}
        <span>${c.label}</span>
      </button>`;

    return html`<div class="coins">${this.coins.map(coin => coinTemp(coin))}</div>`;
  }

  payTemp() {

    if (this.hasTime) {
      if (this.error) {
        return html`
          <div class="error">
            <p>${this.error}</p>
          </div>`;
      }

      return html`
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

    return html`
      <div class="time-out">
        <p>Timeout elapsed for this order.</p>
        <button @click="${() => this.selectCoin(this.coin.id)}">Update Rate</button>
        <button @click="${() => this.selectCoin('')}">Select Different Coin</button>
      </div>`;
  }

  paidTemp() {
    return html`<slot name="paid"></slot>`
  }

  render() {

    let view;

    if (this.paid) {
      view = this.paidTemp();
    } else if (this.coin) {
      view = this.payTemp();
    } else {
      view = this.coinsTemp();
    }

    return html`
      <button class="close" @click="${this.close}">Close</button>
      <div class="dialog">
        ${this.loading && html`<div class="loading"></div>` || ''}
        ${view}
      </div>
    `;
  }

  async coinSelected(event: PointerEvent) {
    const target = event.target as HTMLButtonElement;
    await this.selectCoin(target.dataset.id)
  }

  async selectCoin(coin: string) {
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

      const {success, error} = await this.service.confirmPayment(this.coinValue, this.message);

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
}

