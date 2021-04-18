export class Coin {
    constructor(id, wallet, label, icon, color) {
        this.id = id;
        this.wallet = wallet;
        this.label = label;
        this.icon = icon;
        this.color = color;
    }
    qr(amount, note) {
        let data = `${this.label.toLowerCase().replace(/ /g, '')}:${this.wallet}?amount=${amount}`;
        if (note) {
            data += `&data=${data}`;
        }
        return data;
    }
    rate(amount) {
        return window.jpCrypto.service.getPrice(amount, this.label
            .replace(/ /g, '-')
            .toLowerCase());
    }
    format(amount) {
        return `${amount} ${this.id}`;
    }
}
//# sourceMappingURL=coin.class.js.map