import {Coin} from './coin.class';

export abstract class PaymentMethod {
	constructor(
		public id: string,
		public label: string,
		public icon: string
	) {}

	abstract available(): boolean;

	abstract transfer(coin: Coin, value: number): Promise<any>;
}
