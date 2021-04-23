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
	service?: CryptoService,
  translations?: {[key: string]: string}
) {
	window.jpCrypto = {
		service: service || new CoincapService(),
		coins: coins,
    translations: {
		  'CURRENCY': 'Currency',
      'SELECT_CURRENCY': 'Select one crypto currency',
      'ERROR': 'Error',
      'TIME_LEFT': 'Time left to finish payment',
      'AMOUNT_TO_PAY': 'Amount to pay',
      'WALLET_ADDRESS': 'Payment address',
      'BACK': 'Back',
      'CONFIRM': 'Confirm Payment',
      'TIME_OUT': `Time's up`,
      'TIME_OUT_DESCRIPTION': 'Timeout elapsed for this order.',
      'UPDATE_RATE': 'Update Rate',
      'CHANGE_SELECTION': 'Select Different Coin',
      'CLOSE_DIALOG': 'Close dialog',
		  ...translations || {}
    },
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
		},
	};

	return window.jpCrypto;
}
