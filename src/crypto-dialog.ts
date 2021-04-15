import {css, customElement, html, LitElement, property, query} from 'lit-element';
import {AVAILABLE_COINS} from './available-coins.const';
import {Coin} from './coin.interface';
import {CryptoService} from './crypto.service';
import {CoincapService} from './services/coincap.service';

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
  `;

  @property() wallet = '';
  @property() message = ''
  @property() coins = '';
  @property() waitForConfirmation = false;
  @property({converter: (k) => parseInt(k, 10)}) value: number;
  @property() selectedCoin: string;
  @property() hasTime = true;
  @property() loading = false;
  @property() paid = false;

  shownCoins: Coin[];
  coinValue: number;

  _coin: Coin;

  @query('#jp-c-qr')
  _qrEl: HTMLDivElement;

  get service() {
    return window.jpCrypto.service as CryptoService;
  }

  connectedCallback() {
    super.connectedCallback();

    this.shownCoins = this.coins ?
      this.coins.split(',')
        .map(it => AVAILABLE_COINS.find(({id}) => id === it)) :
      AVAILABLE_COINS;
  }

  coinsTemp() {
    const coinTemp = (c) =>
      html`<button class="coin" data-id="${c.id}" @click="${this.coinSelected}">${c.label}</button>`

    return html`<div class="coins">${this.shownCoins.map(coin => coinTemp(coin))}</div>`;
  }

  payTemp() {
    return html`
      ${this.hasTime ?
        html`
          <slot name="instructions"></slot>
          <crypto-timer time="15:00" @finished="${this.timeOut}"></crypto-timer>
          <div id="jp-c-qr"></div>
          <div>
            <div>${this.coinValue}</div>
            <input readonly value="${this.wallet}" />
            <button @click="${() => this.selectCoin('')}">Back</button>
            <button @click="${() => this.confirmPay()}">Confirm Payment</button>
          </div>
        ` :
        html`<div class="time-out">
            <p>Timeout elapsed for this order.</p>
            <button @click="${() => this.selectCoin(this.selectedCoin)}">Update Rate</button>
            <button @click="${() => this.selectCoin('')}">Select Different Coin</button>
          </div>`
      }
    `;
  }

  paidTemp() {
    return html`<slot name="paid"></slot>`
  }

  render() {

    let view;

    if (this.paid) {
      view = this.paidTemp();
    } else if (this.selectedCoin) {
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
    this.selectedCoin = coin;
    this._coin = AVAILABLE_COINS.find(it => it.id === coin);

    if (this.selectedCoin) {

      this.coinValue = await this.service.getPrice(this.value, coin);

      this.hasTime = true;

      await this.updateComplete;

      this.renderQr();
    }
  }

  renderQr() {
    // @ts-ignore
    const qrCode = new window.QRCodeStyling({
      width: 300,
      height: 300,
      data: this._coin.qr(this.wallet, this.message, this.coinValue),
      image: this._coin.icon,
      imageOptions: {
        margin: 10
      },
      margin: 10,
      dotsOptions: {
        color: this._coin.color,
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

    }

    this.dispatchEvent(new CustomEvent('paid', {
      detail: {
        coin: this.selectedCoin,
        amount: this.coinValue
      }
    }));

    this.paid = true;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'crypto-dialog': CryptoDialog;
  }

  interface Window {
    jpCrypto: any;
  }
}

window.jpCrypto = {
  service: new CoincapService(),
  init: (
    config: {
      wallet: string;
      value: number;
      message?: string;
      coins?: string[];
      target?: HTMLElement;
      instructionsTemplate?: string;
      paidTemplate?: string;
    }
  ) => {
    const el = document.createElement('crypto-dialog');

    if (config.instructionsTemplate) {
      el.innerHTML += `<div slot="instructions">${config.instructionsTemplate}</div>`;
    }

    if (config.paidTemplate) {
      el.innerHTML += `<div slot="paid">${config.paidTemplate}</div>`;
    }

    el.setAttribute('wallet', config.wallet);
    el.setAttribute('value', config.value.toString());

    if (config.message) {
      el.setAttribute('message', config.message);
    }

    if (config.coins) {
      el.setAttribute('coins', config.coins.join(','));
    }

    (config.target || document.body).appendChild(el);

    return el;
  }
}


