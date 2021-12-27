import {metaMask} from '../payment-methods/meta-mask';
import {Coin} from '../types/coin.class';

export const eth = new Coin(
	'ETH',
	'',
	'Ethereum',
	'<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M25 50a25 25 0 100-50 25 25 0 000 50z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#6B71D6" xlink:href="#a"/><path fill="#E9ECFF" d="M25 9a493 493 0 01-9 16l5 3 5 3 5-3 5-3A692 692 0 0025 9m-9 18l10 14 10-14-10 6-5-3a915 915 0 01-5-3"/></g></svg>',
	'#6b71d6',
	[metaMask]
);
