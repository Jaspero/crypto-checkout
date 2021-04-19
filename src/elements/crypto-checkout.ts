import 'qr-code-styling/lib/qr-code-styling.js';
import {css, customElement, html, LitElement, property, query} from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {Coin} from '../types/coin.class';
import {CryptoService} from '../types/crypto.service';

@customElement('crypto-checkout')
export class CryptoCheckout extends LitElement {
  static styles = css`
    :host {
      --size-unit: min(4vw, 16px);

      position: fixed;
      z-index: 2147483647;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      overflow: auto;
      background: rgba(0,0,0,.35);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: var(--size-unit);
    }

    .cc {
      margin: auto;
      background: white;
      border-radius: 2em;
      padding: 4em;
      box-shadow: 0 0 .1em rgba(0,0,0,.2), 0 .5em 1em rgba(0,0,0,.1), 0 1em 2em rgba(0,0,0,.05);
    }

    .cc-close {
      position: fixed;
      top: .25em;
      right: .25em;
      padding: 0;
      border: none;
      font-size: inherit;
      cursor: pointer;
      background: white;
      border-radius: 2em;
    }

    .cc-close:hover,
    .cc-close:focus {
      background: #eee;
    }

    .cc-close-icon {
      width: 1.5em;
      height: 1.5em;
      display: block;
    }
    
    .cc-coins {
      display: flex;
      flex-direction: column;
    }

    .cc-coins-title {
      font-size: 1.375em;
      font-weight: bold;
      margin: 0;
    }

    .cc-coins-description {
      font-size: 1em;
      margin: .25em 0 2em;
      opacity: 0.6;
    }
    
    .cc-coins-button {
      font-size: inherit;
      font-family: inherit;
      display: flex;
      align-items: center;
      background: none;
      border-top: .1em solid #ccc;
      border-right: .1em solid #ccc;
      border-bottom: none;
      border-left: .1em solid #ccc;
      padding: 1.5em 4em 1.5em 1.5em;
      cursor: pointer;
    }

    .cc-coins-button:first-of-type {
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
    }
    .cc-coins-button:last-of-type {
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;
      border-bottom: .1em solid #ccc;
    }

    .cc-coins-button:hover,
    .cc-coins-button:focus {
      background: #eee;
    }
    
    .cc-coins-button > svg {
      width: 2em;
      height: 2em;
      margin-right: 1em;
    }  
  `;

  @property({type: Boolean}) waitForConfirmation = false;
  @property({type: Boolean}) target = false;
  @property({type: Boolean}) closeOnEscape = true;
  @property({type: Boolean}) lockCoin = false;

  @property() message = '';
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

  onEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.close();
    }
  };

  connectedCallback() {

    if (this.coin) {
      this.selectCoin(this.coin as unknown as string)
        .catch();
    }

    if (this.closeOnEscape) {
      window.addEventListener('keyup', this.onEsc);
    }

    super.connectedCallback();
  }

  disconnectedCallback() {
    window.removeEventListener('keyup', this.onEsc);
    super.disconnectedCallback();
  }

  coinsTemp() {
    const coinTemp = (c) =>
      html`<button class="cc-coins-button" data-id="${c.id}" @click="${this.coinSelected}">
        ${unsafeHTML(c.icon)}
        ${c.label}
      </button>`;

    return html`
      <div class="cc-coins">
        <h1 class="cc-coins-title">Currency</h1>
        <p class="cc-coins-description">Select one crypto currency</p>
        ${this.coins.map(coin => coinTemp(coin))}
      </div>
    `;
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
          ${this.lockCoin ? html`<button @click="${() => this.selectCoin('')}">Back</button>` : ''}
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

    if (this.target) {
      return html`
        ${this.loading && html`<div class="loading"></div>` || ''}
        ${view}
      `;
    }

    return html`
      <button class="cc-close" @click="${this.close}" aria-label="Close dialog" title="Close dialog">
        <svg class="cc-close-icon" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2"><path d="M16 8l-8 8m8 0L8 8"/></svg>
      </button>
      <article class="cc">
        ${this.loading && html`<div class="loading"></div>` || ''}
        ${view}
      </article>
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

