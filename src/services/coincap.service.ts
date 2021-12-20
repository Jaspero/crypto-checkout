import {CryptoService} from '../types/crypto.service';

export class CoincapService extends CryptoService {

  url = 'https://api.coincap.io/v2/';
  cacheDuration = 5 * 60 * 1000;
  cache: {
    [key: string]: {
      timeStamp: number;
      price: number;
    }
  } = {};

  async getPrice(value, coin) {

    if (this.cache[coin]) {
      if (this.cache[coin].timeStamp > (Date.now() - this.cacheDuration)) {
        return value / this.cache[coin].price;
      } else {
        delete this.cache[coin];
      }
    }

    let res: any = await fetch(
      this.url + 'assets/' + coin
    );
    res = await res.json();

    this.cache[coin] = {
      timeStamp: Date.now(),
      price: res.data.priceUsd
    };

    return value / res.data.priceUsd;
  }

  async confirmPayment(value, note) {
    return {success: true, value, note};
  }
}
