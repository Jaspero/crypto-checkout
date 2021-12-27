import {Coin} from '../types/coin.class';

export const btc = new Coin(
	'BTC',
	'',
	'Bitcoin',
	'<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M25 50a25 25 0 100-50 25 25 0 000 50z" id="a"/></defs><g fill="none" fill-rule="evenodd"><use fill="#F7931A" xlink:href="#a"/><path d="M31 22c-1 3-5 2-7 1l2-5c1 1 6 1 5 4zm-1 8c-1 3-6 1-8 1l2-5c2 0 7 1 6 4zm6-8c0-3-2-4-5-5l1-4-3-1-1 4-2-1 1-3-2-1-1 4h-2l-3-1-1 2 2 1 1 1-1 5-2 6-1 1-2-1-1 3 3 1h2l-1 4 3 1 1-4h2l-1 4 2 1 1-4c5 1 8 0 9-3s0-5-2-6c1-1 3-2 3-4z" fill="#FFF"/></g></svg>',
	'#F7931A'
);

btc.decimals = 8;
