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