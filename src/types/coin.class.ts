import {PaymentMethod} from './payment-method.class';

export class Coin {
	constructor(
		public id: string,
		public wallet: string,
		public label: string,
		public icon: string,
		public color: string,
		public paymentMethods?: PaymentMethod[]
	) {}

	qr(amount: number, note?: string) {

		let data = `${this.label.toLowerCase().replace(/ /g, '')}:${this.wallet}?amount=${amount}`;

		if (note) {
			data += `&data=${data}`;
		}

		return data;
	}

	rate(amount: number) {
		return window.jpCrypto.service.getPrice(
			amount,
			this.label
				.replace(/ /g, '-')
				.toLowerCase()
		)
	}

	format(amount: number) {
		return `${amount} ${this.id}`;
	}
}
