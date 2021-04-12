import {customElement, html, LitElement, property} from 'lit-element';

@customElement('crypto-timer')
export class CryptoTimer extends LitElement {
  @property() time: string;
  @property() current: string;

  total: number;

  _timer;

  connectedCallback() {
    super.connectedCallback();
    const [minutes, seconds] = this.time.split(':').map(it => parseInt(it, 10));

    this.total = (minutes * 60) + seconds;
    this.current = this.time;
    this._timer = setInterval(() => {
      this.total -= 1;
      const min = Math.floor(this.total / 60);
      const sec = this.total % 60;

      if (this.total) {
        this.current = `${min > 9 ? min : `0${min}`}:${sec > 9 ? sec : `0${sec}`}`;
        return;
      }

      this.dispatchEvent(new CustomEvent('finished'));
    }, 1000);
  }

  disconnectedCallback() {
    clearInterval(this._timer);
    super.disconnectedCallback();
  }

  render() {
    return html`${this.current}`;
  }
}
