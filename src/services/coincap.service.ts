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

  roundAccurately(number: number, decimalPlaces: number) {
    // @ts-ignore
    return Number(Math.round(number + 'e' + decimalPlaces) + 'e-' + decimalPlaces);
  }

  async getPrice(value, coin, decimals = 6) {

    if (this.cache[coin]) {
      if (this.cache[coin].timeStamp > (Date.now() - this.cacheDuration)) {
        return this.roundAccurately(value / this.cache[coin].price, decimals);
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

    return this.roundAccurately(value / res.data.priceUsd, decimals);
  }

  async confirmPayment(value, note) {
    return {success: true, value, note};
  }
}
