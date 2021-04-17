import {CryptoService} from '../crypto.service';

export class CoincapService extends CryptoService {

  url = 'https://api.coincap.io/v2/';
  coinMap = {
    btc: 'bitcoin',
    eth: 'ethereum',
    bch: 'bitcoin-cash',
    ltc: 'litecoin',
    bsv: 'bitcoin-sv',
    xmr: 'monero'
  };

  async getPrice(value, coin) {
    let res: any = await fetch(
      this.url + 'assets/' + this.coinMap[coin.toLowerCase()]
    );
    res = await res.json();

    return value / res.data.priceUsd;
  }
}
