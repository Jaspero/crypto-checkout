import 'qr-code-styling/lib/qr-code-styling.js';
import {css, customElement, html, LitElement, property, query} from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {Coin} from '../types/coin.class';
import {CryptoService} from '../types/crypto.service';

@customElement('crypto-checkout')
export class CryptoCheckout extends LitElement {
  static styles = css`
    :host {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 16px;
      color: #000;
    }

    .cc {
      position: fixed;
      z-index: 2147483647;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      overflow: auto;
      background: rgba(0,0,0,.35);
    }

    .cc-content {
      margin: auto;
      width: 100%;
      max-width: 320px;
      background: white;
      border-radius: 1.5em;
      padding: 3em;
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
      max-height: 350px;
      overflow-y: auto;
    }

    .cc-title {
      font-size: 1.375em;
      font-weight: bold;
      margin: 0;
    }

    .cc-description {
      font-size: 1em;
      margin: .25em 0 2em;
      opacity: 0.6;
    }

    .cc-search {
      position: relative;
    }

    .cc-search-icon {
      position: absolute;
      top: .5em;
      left: .5em;
    }

    .cc-search > input {
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
      border: .1em solid #ccc;
      font-size: inherit;
      font-family: inherit;
      padding: .5em 3.5em;
      box-sizing: border-box;
      width: 100%;
    }    
    
    .cc-coin {
      font-size: inherit;
      font-family: inherit;
      display: flex;
      align-items: center;
      background: none;
      border-top: .1em solid #ccc;
      border-right: .1em solid #ccc;
      border-bottom: none;
      border-left: .1em solid #ccc;
      padding: .5em;
      cursor: pointer;
    }

    .cc-coin:first-of-type {
      border-top: none;
    }
    
    .cc-coin:last-of-type {
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;
      border-bottom: .1em solid #ccc;
    }

    .cc-coin:hover,
    .cc-coins-button:focus {
      background: #eee;
    }
    
    .cc-coin > svg {
      width: 2em;
      height: 2em;
      margin-right: 1em;
    }
    
    .cc-loading-wrapper {
      margin: 1em 0;
    }
    
    .cc-loading-label {
      margin-top: 1em;
      text-align:center;
    }
    
    #cc-qr {
      text-align: center;
      margin: 1.5em 0;
    }

    #cc-qr > canvas {
      width: 100%;
      max-width: 300px;
    }

    .cc-button {
      cursor: pointer;
      padding: .75em 1em;
      border: 1px solid #ddd;
      border-radius: .5em;
      background: white;
      color: inherit;
      box-shadow: 0 .1em .25em rgba(0,0,0,.25);
      font-size: inherit;
      font-family: inherit;
    }

    .cc-button:hover,
    .cc-button:focus {
      background: #eee;
    }

    .cc-figure {
      margin: 1em 0;
    }

    .cc-figure-title {
      opacity: .6;
      font-size: .875em;
      margin-bottom: .25em;
    }

    .cc-figure-content {
      word-break: break-word;
    }

    .cc-actions {
      margin-top: 2em;
    }

    .cc-loading {
      display: block;
      border-radius: 50%;
      width: 2em;
      height: 2em;
      border: .15em solid;
      margin: auto;
      border-top-color: transparent;
      border-bottom-color: transparent;
      animation: 1s loading infinite;
    }

    @keyframes loading {
      to { transform: rotate(360deg); }
    }
  `;

  @property({type: Boolean}) waitForConfirmation = false;
  @property({type: Boolean}) target = false;
  @property({type: Boolean}) closeOnEscape = true;
  @property({type: Boolean}) lockCoin = false;
  @property({type: Boolean}) showSearch = true;

  @property() message = '';
  @property() hasTime = true;
  @property() loading = false;
  @property() priceLoading = false;

  @property() paid = false;
  @property() error: string;
  @property() shownCoins = [];

  @property({converter: (k) => parseInt(k, 10)}) value: number;
  @property() coinValue: number;
  @property() displayedCoinValue: string;

  @property() coin: Coin;

  @query('#cc-qr')
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

    this.shownCoins = [...this.coins];

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
      html`<button class="cc-coin" data-id="${c.id}" @click="${this.coinSelected}">
        ${unsafeHTML(c.icon)}
        ${c.label}
      </button>`;

    return html`
      <h1 class="cc-title">${this.translation('CURRENCY')}</h1>
      <p class="cc-description">${this.translation('SELECT_CURRENCY')}</p>
      ${this.showSearch ? html`<div class="cc-search">
        <div class="cc-search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>
        <input name="paf" placeholder="${this.translation('SEARCH')}" @input="${this.search}" />
      </div>` : ''}
      <div class="cc-coins">
        ${this.shownCoins.map(coin => coinTemp(coin))}
      </div>
    `;
  }

  search(e: any) {
    const value = e.path[0].value.toLowerCase().trim();

    if (value) {
      this.shownCoins = this.coins.filter(coin => (coin.id + coin.label).toLowerCase().includes(value));
    } else {
      this.shownCoins = [...this.coins];
    }

    console.log(value, this.shownCoins);
  }

  paymentMethodsTemp() {

    const methodTemp = (c) =>
      html`<button class="cc-method" data-id="${c.id}" @click="${this.paymentMethodSelected}">
        ${unsafeHTML(c.icon)}
        ${c.label}
      </button>`;

    return html`<div class="cc-methods">${this.coin.paymentMethods.filter(method => method.available()).map(method => methodTemp(method))}</div>`;
  }

  payTemp() {

    if (this.hasTime) {
      if (this.error) {
        return html`
          <h1 class="cc-title">${this.translation('ERROR')}</h1>
          <p class="cc-description">${this.error}</p>
        `;
      }

      return html`
        <h1 class="cc-title">${this.coin.label}</h1>
        <p class="cc-description">${this.translation('TIME_LEFT')}: <crypto-timer time="15:00" @finished="${this.timeOut}"></crypto-timer></p>
        <slot name="instructions"></slot>
        ${this.priceLoading ? html`
          <div class="cc-loading-wrapper">
            <div class="cc-loading"></div>
            <div class="cc-loading-label">${this.translation('PRICE_LOADING')}</div>
          </div>

          ${this.lockCoin ? '' : html`
            <div class="cc-actions">
              <button class="cc-button" @click="${() => this.selectCoin('')}">${this.translation('BACK')}</button>
            </div>
          `}
        ` : html`
          <div id="cc-qr"></div>
          <figure class="cc-figure">
            <figcaption class="cc-figure-title">${this.translation('AMOUNT_TO_PAY')}:</figcaption>
            <div class="cc-figure-content">${this.displayedCoinValue}</div>
          </figure>
          <figure class="cc-figure">
            <figcaption class="cc-figure-title">${this.translation('WALLET_ADDRESS')}:</figcaption>
            <div class="cc-figure-content">${this.coin.wallet}</div>
          </figure>
        
          ${this.coin.paymentMethods?.length ? this.paymentMethodsTemp() : ''}
        
          <div class="cc-actions">
            ${this.lockCoin ? '' : html`<button class="cc-button" @click="${() => this.selectCoin('')}">${this.translation('BACK')}</button>`}
            <button class="cc-button" @click="${() => this.confirmPay()}">${this.translation('CONFIRM')}</button>
          </div>
        `}
      `;
    }

    return html`
      <h1 class="cc-title">${this.translation('TIME_OUT')}</h1>
      <p class="cc-description">${this.translation('TIME_OUT_DESCRIPTION')}</p>
      <button class="cc-button" @click="${() => this.selectCoin(this.coin.id)}">${this.translation('UPDATE_RATE')}</button>
      <button class="cc-button" @click="${() => this.selectCoin('')}">${this.translation('CHANGE_SELECTION')}</button>
    `;
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
        ${this.loading && html`<div class="cc-loading"></div>` || ''}
        ${view}
      `;
    }

    return html`
      <div class="cc">
        <button class="cc-close" @click="${this.close}" aria-label="Close dialog" title="${this.translation('CLOSE_DIALOG')}">
          <svg class="cc-close-icon" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2"><path d="M16 8l-8 8m8 0L8 8"/></svg>
        </button>
        <article class="cc-content">
          ${this.loading && html`<div class="cc-loading"></div>` || ''}
          ${view}
        </article>
      </div>
    `;
  }

  async coinSelected(event: PointerEvent) {
    const target = event.target as HTMLButtonElement;
    await this.selectCoin(target.dataset.id)
  }

  async paymentMethodSelected(event: PointerEvent) {
    const target = event.target as HTMLButtonElement;

    const method = this.coin.paymentMethods.find(it => it.id === target.dataset.id);

    const transaction = await method.transfer(this.coin, this.coinValue);

    this.markPaid({transaction});
  }

  async selectCoin(coin: string) {
    this.coin = coin ? this.coins.find(it => it.id === coin) : null;

    if (this.coin) {

      this.priceLoading = true;

      this.shownCoins = [...this.coins];
      this.coinValue = await this.coin.rate(this.value);
      this.displayedCoinValue = this.coin.format(this.coinValue);

      this.priceLoading = false;
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
        color: '#fafafa',
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

    this.markPaid();
  }

  markPaid(metadata?: any) {
    this.dispatchEvent(new CustomEvent('paid', {
      detail: {
        coin: this.coin.id,
        amount: this.coinValue,
        ...metadata && {metadata}
      }
    }));

    this.paid = true;
  }

  translation(value: string) {
    return window.jpCrypto.translations[value] || 'MISSING_TRANSLATION';
  }
}

