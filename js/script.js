const myTextArea = document.querySelector('textarea[name="name"]');
const remainingCharsText = document.getElementById('remaining-chars');
const form = document.querySelector('form');
const myForm = document.getElementById('myForm');
const textAlert = document.getElementById('text-alert');
var radioYes = document.getElementById('r1');
var radioNo = document.getElementById('r2');
const radioAlert = document.getElementById('radio-alert');
const priceNetto = document.getElementById('form-netto');
const priceNettoAlert = document.getElementById('priceNetto-alert');
const priceBrutto = document.getElementById('form-brutto');
const vatSelect = document.getElementById('inputGroupSelect01');
const vatAlert = document.getElementById('vat-alert');
const thankYou = document.getElementById('thank-you');
const priceN = document.querySelector('input[name="price_netto"]');
var fieldset = document.getElementById('fieldset');

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

vatSelect.addEventListener('change', (event) => {
  if (event.target.selected) {
    priceN.disabled = true;
  } else {
    priceN.disabled = false;
  }
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

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
  addData();
  if (myTextArea.value != '' && fieldset.value != '' && vatSelect.value != '' && priceNetto.value != '' && priceBrutto.value != '') {
    form.classList.add('hidden');
    thankYou.classList.remove('hidden')
  }
});