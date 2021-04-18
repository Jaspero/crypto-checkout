import {CryptoDialog} from './elements/crypto-dialog';
import {CryptoTimer} from './elements/crypto-timer';
import {CoincapService} from './services/coincap.service';
import {Coin} from './types/coin.class';
import {CryptoService} from './types/crypto.service';
import {JpCrypto} from './types/jp-crypto.interface';

declare global {
	interface HTMLElementTagNameMap {
		'crypto-dialog': CryptoDialog;
		'crypto-timer': CryptoTimer;
	}

	interface Window {
		jpCrypto: JpCrypto;
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
		open: (
			config: {
				value: number;
				closeOnEscape?: boolean;
				waitForConfirmation?: boolean;
				message?: string;
				target?: HTMLElement;
				instructionsTemplate?: string;
				paidTemplate?: string;
			}
		) => {
			const el = document.createElement('crypto-dialog');

			if (config.instructionsTemplate) {
				el.innerHTML += `<div slot="instructions">${config.instructionsTemplate}</div>`;
			}

			if (config.paidTemplate) {
				el.innerHTML += `<div slot="paid">${config.paidTemplate}</div>`;
			}

			el.setAttribute('value', config.value.toString());

			if (config.message) {
				el.setAttribute('message', config.message);
			}

			if (config.waitForConfirmation) {
				el.setAttribute('waitForConfirmation', config.waitForConfirmation as any);
			}

			(config.target || document.body).appendChild(el);

			return el;
		}
	};

	return window.jpCrypto;
}
