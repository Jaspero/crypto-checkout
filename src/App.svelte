<script>
  import {bch, bsv, btc, eth, ltc, xmr, init} from '@jaspero/crypto-checkout';

  btc.wallet = 'bc1qk4th7mv0qzfxup5avrecratg24u9e0l56k9x7e';
  eth.wallet = '0x751721F9754A35B4f86BaE06295406ea335eba46';
  ltc.wallet = 'LUKqmHBopaX2PS7zndewaEUwWFGZvX3htC';
  bch.wallet = 'qpanrffk9xpymjetvm8pf5pxx95zp5hc7sld6qzyrt';
  bsv.wallet = '1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGUq';
  xmr.wallet = '1PvPkR8PCpPTq7bK7mQgBwwfX4KhW2eUGU';

  const crypto = init([btc, eth, ltc, bch, bsv, xmr]);

  let amount = 1;

  function openCheckout() {
    crypto.open({
      value: amount,
      message: 'crypto-checkout-demo',
      paidTemplate: 'Payment completed. Thank you!'
    })
  }
</script>

<a class="fork" target="_blank" href="https://github.com/Jaspero/crypto-checkout">
	<img
	loading="lazy"
  width="149"
  height="149"
  src="forkme-white.png"
  alt="Fork me on GitHub"
  data-recalc-dims="1" />
</a>

<h1>Crypto Checkout</h1>

<h2>An open-source library for implementing a crypto currency checkout flow in your webapp.</h2>

<main>

  <input type="number" placeholder="Amount" bind:value={amount}>

  <button on:click={openCheckout}>Checkout</button>
</main>

<div class="logo">
  <img src="logo.svg" alt="Jaspero Logo">
</div>

<style>
  .fork {position: absolute; top: 0; right: 0;}
  main {
    text-align: center;
    padding: 1em;
  }
  .logo {max-width: 200px; margin: 50px auto;}
</style>
