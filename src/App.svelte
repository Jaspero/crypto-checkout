<script>

	import {bch, bsv, btc, eth, ltc, xmr} from '@jaspero/crypto-checkout';
	import {init} from '@jaspero/crypto-checkout/core';

	btc.wallet = 'bc1qk4th7mv0qzfxup5avrecratg24u9e0l56k9x7e';
	eth.wallet = '0x751721F9754A35B4f86BaE06295406ea335eba46';
	ltc.wallet = 'LUKqmHBopaX2PS7zndewaEUwWFGZvX3htC';
	bch.wallet = 'qpanrffk9xpymjetvm8pf5pxx95zp5hc7sld6qzyrt';
	bsv.wallet = '1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGUq';
	xmr.wallet = '1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGU';

	const crypto = init([btc, eth, ltc, bch, bsv, xmr]);

	let amount = 1;

	function openCheckout() {
		crypto.open({value: amount, message: 'crypto-checkout-demo'})
	}
</script>

<main>
	<input type="number" placeholder="Amount" bind:value={amount}>

	<button on:click={openCheckout}>Checkout</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
	}
</style>
