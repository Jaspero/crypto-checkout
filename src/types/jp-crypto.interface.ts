import {CryptoDialog} from '../elements/crypto-dialog';
import {Coin} from './coin.class';
import {CryptoService} from './crypto.service';

export interface JpCrypto {
	service: CryptoService,
	coins: Coin[];
	open: (config: {
		value: number;
		message?: string;
		target?: HTMLElement;
		instructionsTemplate?: string;
		paidTemplate?: string;
	}) => CryptoDialog;
}
