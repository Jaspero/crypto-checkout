import {css, customElement, html, LitElement, property, query} from 'lit-element';
import {AVAILABLE_COINS} from './available-coins.const';
import {Coin} from './coin.interface';

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
  @property({converter: (k) => parseInt(k, 10)}) value: number;
  @property() selectedCoin: string;
  @property() hasTime = true;
  @property() loading = false;

  shownCoins: Coin[];
  coinValue: number;

  _coin: Coin;

  @query('#jp-c-qr')
  _qrEl: HTMLDivElement;

  connectedCallback() {
    super.connectedCallback();

    this.shownCoins = this.coins ?
      this.coins.split(',')
        .map(it => AVAILABLE_COINS.find(({id}) => id === it)) :
      AVAILABLE_COINS;
  }

  coinTemp(coin: Coin) {
    return html`<button class="coin" data-id="${coin.id}" @click="${this.coinSelected}">${coin.label}</button>`;
  }

  payTemp() {
    return html`
      ${this.hasTime ?
        html`
          <slot></slot>
          <crypto-timer time="15:00" @finished="${this.timeOut}"></crypto-timer>
          <div id="jp-c-qr"></div>
          <div>
            <div>${this.coinValue}</div>
            <input readonly value="${this.wallet}" />
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

  render() {
    return html`
      <button class="close" @click="${this.close}">Close</button>
      <div class="dialog">
        ${this.loading && html`<div class="loading"></div>` || ''}
        <div class="coins">${this.shownCoins.map(coin => this.coinTemp(coin))}</div>
        ${this.selectedCoin && this.payTemp() || ''}
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
}

declare global {
  interface HTMLElementTagNameMap {
    'crypto-dialog': CryptoDialog;
  }
}

// @ts-ignore
window.jpCrypto = {
  init: (
    config: {
      wallet: string;
      value: number;
      text?: string;
      message?: string;
      coins?: string[];
      target?: HTMLElement;
    }
  ) => {
    const el = document.createElement('crypto-dialog');

    if (config.text) {
      el.innerHTML = config.text;
    }

    el.setAttribute('wallet', config.wallet);
    el.setAttribute('value', config.value.toString());

    if (config.message) {
      el.setAttribute('message', config.wallet);
    }

    if (config.coins) {
      el.setAttribute('coins', config.coins.join(','));
    }

    (config.target || document.body).appendChild(el);
  }
}
