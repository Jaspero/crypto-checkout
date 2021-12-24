import {PaymentMethod} from './payment-method.class';

export class Coin {

	label: string;

	constructor(
		public id: string,
		public wallet: string,
		public name: string,
		public icon: string,
		public color: string,
		public paymentMethods?: PaymentMethod[]
	) {
		this.label = name;
	}

	qr(amount: number, note?: string) {

		let data = `${this.name.toLowerCase().replace(/ /g, '')}:${this.wallet}?amount=${amount}`;

		if (note) {
			data += `&data=${data}`;
		}

		return data;
	}

	rate(amount: number) {
		return window.jpCrypto.service.getPrice(
			amount,
			this.name
				.replace(/ /g, '-')
				.toLowerCase()
		)
	}

	format(amount: number) {
		return `${amount} ${this.id}`;
	}
}
