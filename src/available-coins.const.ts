import {Coin} from './coin.interface';

export const AVAILABLE_COINS: Coin[] = [
  {
    label: 'Bitcoin',
    icon: '/dev/bitcoin.svg',
    id: 'BTC',
    qr: (wallet, note, amount) => `bitcoin:${wallet}?amount=${amount}&label=${note}`,
    format: (amount: string) => `${amount} BTC`,
    color: '#F7931A'
  },
  {
    label: 'Ethereum',
    icon: '/dev/etherium.svg',
    id: 'ETH',
    qr: (wallet, note, amount) => `ethereum:${wallet}?amount=${amount}&data=${note}`,
    format: (amount: string) => `${amount} ETH`,
    color: '#6b71d6'
  }
];
