import {CryptoService} from '../types/crypto.service';

export class CoincapService extends CryptoService {

  url = 'https://api.coincap.io/v2/';

  async getPrice(value, coin) {
    let res: any = await fetch(
      this.url + 'assets/' + coin
    );
    res = await res.json();

    return value / res.data.priceUsd;
  }
}
