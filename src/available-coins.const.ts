import {Coin} from './coin.interface';

export const AVAILABLE_COINS: Coin[] = [
  {
    label: 'Bitcoin',
    icon: '/dev/bitcoin.svg',
    id: 'BTC',
    qr: (wallet, note, amount) => `bitcoin:${wallet}?amount=${amount}&label=${note}`,
    format: (amount) => `${amount} BTC`,
    color: '#F7931A'
  },
  {
    label: 'Ethereum',
    icon: '/dev/etherium.svg',
    id: 'ETH',
    qr: (wallet, note, amount) => `ethereum:${wallet}?amount=${amount}&data=${note}`,
    format: (amount) => `${amount} ETH`,
    color: '#6b71d6'
  },
  {
    label: 'bitcoincash',
    icon: '/dev/bitcoincash.svg',
    id: 'BCH',
    qr: (wallet, note, amount) => `bitcoincash:${wallet}?amount=${amount}&data=${note}`,
    format: (amount) => `${amount} BCH`,
    color: '#8dc351'
  },
  {
    label: 'litecoin',
    icon: '/dev/litecoin.svg',
    id: 'LTC',
    qr: (wallet, note, amount) => `litecoin:${wallet}?amount=${amount}&data=${note}`,
    format: (amount) => `${amount} LTC`,
    color: '#bebebe'
  },
  {
    label: 'bitcoinsv',
    icon: '/dev/bitcoinsv.svg',
    id: 'BSV',
    qr: (wallet, note, amount) => `bitcoinsv:${wallet}?amount=${amount}&data=${note}`,
    format: (amount) => `${amount} BSV`,
    color: '#eab300'
  },
  {
    label: 'monero',
    icon: '/dev/monero.svg',
    id: 'XMR',
    qr: (wallet, note, amount) => `monero:${wallet}?tx_amount=${amount}&data=${note}`,
    format: (amount) => `${amount} XMR`,
    color: '#d26e2b'
  }
];
