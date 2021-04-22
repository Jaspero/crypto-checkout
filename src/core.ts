import {CryptoCheckout} from './elements/crypto-checkout';
import {CryptoTimer} from './elements/crypto-timer';
import {CryptoTrigger} from './elements/crypto-trigger';
import {CoincapService} from './services/coincap.service';
import {Coin} from './types/coin.class';
import {CryptoService} from './types/crypto.service';
import {JpCrypto} from './types/jp-crypto.interface';

declare global {
	interface HTMLElementTagNameMap {
		'crypto-checkout': CryptoCheckout;
		'crypto-timer': CryptoTimer;
		'crypto-trigger': CryptoTrigger
	}

	interface Window {
		jpCrypto: JpCrypto;
		ethereum?: any;
	}

	class QRCodeStyling {
		constructor(config: any);
		append(el: HTMLElement);
	}
}

export function init(
	coins: Coin[],
	service?: CryptoService
) {
	window.jpCrypto = {
		service: service || new CoincapService(),
		coins: coins,
		open: config => {
			const el = document.createElement('crypto-checkout');

			if (config.instructionsTemplate) {
				el.innerHTML += `<div slot="instructions">${config.instructionsTemplate}</div>`;
			}

			if (config.paidTemplate) {
				el.innerHTML += `<div slot="paid">${config.paidTemplate}</div>`;
			}

			if (config.target) {
				el.setAttribute('target', true as any);
			}

			[
				'message',
				'closeOnEscape',
				'value',
				'waitForConfirmation',
				'coin',
				'lockCoin'
			]
				.forEach(key => {
					if (config.hasOwnProperty(key)) {
						el.setAttribute(key, config[key])
					}
				});

			(config.target || document.body).appendChild(el);

			return el;
		}
	};

	return window.jpCrypto;
}
