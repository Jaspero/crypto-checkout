window.onload = () => {

  const wallet = 'example';
  const message = 'some-other-example';

  const triggerEl = document.getElementById('crypto');

  triggerEl.addEventListener('click', () => {
    window.jpCrypto.init({wallet, message, value: 100});
  })
}
