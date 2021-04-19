import { Coin } from '../types/coin.class';
class Xmr extends Coin {
    qr(note, amount) {
        return `monero:${this.wallet}?tx_amount=${amount}&data=${note}`;
    }
}
export const xmr = new Xmr('XMR', '', 'Monero', '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128 0A128 128 0 007 168h38V61l83 83 83-83v107h38A128 128 0 00128 0" fill="#F60"/><path d="M109 163l-36-36v68H19a128 128 0 00218 0h-54v-68l-36 36-19 19-19-19z" fill="#4C4C4C"/></svg>', '#d26e2b');
//# sourceMappingURL=xmr.js.map