import {Coin} from '../types/coin.class';

class Xrp extends Coin {
	qr(note, amount) {
		return `ripple:${this.wallet}?amount=${amount}&data=${note}`;
	}
}

export const xrp = new Xrp(
	'XRP',
	'',
	'XRP',
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 424"><defs><style>.cls-1{fill:#23292f;}</style></defs><title>x</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M437,0h74L357,152.48c-55.77,55.19-146.19,55.19-202,0L.94,0H75L192,115.83a91.11,91.11,0,0,0,127.91,0Z"/><path class="cls-1" d="M74.05,424H0L155,270.58c55.77-55.19,146.19-55.19,202,0L512,424H438L320,307.23a91.11,91.11,0,0,0-127.91,0Z"/></g></g></svg>',
	'#23292f'
);
