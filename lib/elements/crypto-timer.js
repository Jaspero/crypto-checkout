var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement, property } from 'lit-element';
let CryptoTimer = class CryptoTimer extends LitElement {
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
        return html `${this.current}`;
    }
};
__decorate([
    property()
], CryptoTimer.prototype, "time", void 0);
__decorate([
    property()
], CryptoTimer.prototype, "current", void 0);
CryptoTimer = __decorate([
    customElement('crypto-timer')
], CryptoTimer);
export { CryptoTimer };
//# sourceMappingURL=crypto-timer.js.map