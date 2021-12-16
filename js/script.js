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

const validateInputs = () => {
  if (!myTextArea.value) {
    textAlert.classList.remove('hidden')
  }

  if (!radioYes.checked && !radioNo.checked) {
    radioAlert.classList.remove('hidden')
  }

  if (!vatSelect.value) {
    vatAlert.classList.remove('hidden')
  }

  if (!priceNetto.value) {
    priceNettoAlert.classList.remove('hidden')
  }
}

function addData() {
  const data = [];
  for (let i = 0; i < 1; i++) {
    var text = myTextArea.value;
    var yesNo = fieldset.value;
    var vat = vatSelect.value;
    var netto = priceNetto.value;
    var brutto = priceBrutto.value;
    const oneData = {
      text,
      yesNo,
      vat,
      netto,
      brutto
    }
    data.push(oneData);
  }
  console.log(data);
}