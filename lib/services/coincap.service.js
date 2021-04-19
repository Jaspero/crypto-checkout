import { CryptoService } from '../types/crypto.service';
export class CoincapService extends CryptoService {
    constructor() {
        super(...arguments);
        this.url = 'https://api.coincap.io/v2/';
    }
    async getPrice(value, coin) {
        let res = await fetch(this.url + 'assets/' + coin);
        res = await res.json();
        return value / res.data.priceUsd;
    }
    async confirmPayment(value, note) {
        return { success: true, value, note };
    }
}
//# sourceMappingURL=coincap.service.js.map