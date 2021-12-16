const myTextArea = document.querySelector('textarea[name="name"]');
const remainingCharsText = document.getElementById('remaining-chars');

myTextArea.addEventListener('input', () => {
  const remaining = myTextArea.value.length;
  remainingCharsText.textContent = `${remaining}/250`;
  if (remaining == 255) {
    remainingCharsText.textContent = `You can’t enter more than 255 characters!`;
  } else {
    remainingCharsText.textContent;
  }
});

radioYes.addEventListener('click', () => {
  fieldset.value = radioYes.value
});

radioNo.addEventListener('click', () => {
  fieldset.value = radioNo.value
});

priceN.addEventListener('input', () => {
  const brutto = Math.round(priceN.value * vatSelect.value * 100) / 100;
  priceBrutto.value = `${brutto}`;
});