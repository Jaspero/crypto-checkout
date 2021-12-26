import {CryptoCheckout} from '../elements/crypto-checkout';
import {Coin} from './coin.class';
import {CryptoService} from './crypto.service';

export interface JpCryptoConfig {
	value: number;
	message?: string;
	coin?: string;
	lockCoin?: boolean;
	target?: HTMLElement;
	instructionsTemplate?: string;
	paidTemplate?: string;
	closeOnEscape?: boolean;
	waitForConfirmation?: boolean;
}

export interface JpCrypto {
	service: CryptoService;
  translations: {[key: string]: string};
	coins: Coin[];
	open: (config: JpCryptoConfig) => CryptoCheckout;
	close: () => void;
	instance?: HTMLElement;
	onOpen?: () => void;
	onClose?: () => void;
}
