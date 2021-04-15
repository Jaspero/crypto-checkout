window.onload = () => {

  const wallet = '0xa6e584edbdfcb5ac1e790d953bd2f0b62967c12b';
  const value = 1;

  const triggerEl = document.getElementById('crypto');

  triggerEl.addEventListener('click', () => {
    const el = window.jpCrypto.init({
      wallet,
      value,
      message: 'some-other-example',
      paidTemplate: `Thank you for using crypto`,
      instructionsTemplate: 'Use the below to pay.'
    });

    el.addEventListener('paid', a => {
      console.log('Someone paid', a.detail);
    })
  })
}
