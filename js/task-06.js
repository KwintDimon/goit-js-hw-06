const refs = {
  input : document.querySelector('#validation-input')
}
refs.input.addEventListener('blur',onInputBlur);
function onInputBlur(event) {
  const enteredValue = event.target.value;
  const expectedLength = event.target.getAttribute('data-length');


if (enteredValue.length === Number(expectedLength)) {
  refs.input.classList.remove('invalid');
  refs.input.classList.add('valid');
} else {
   refs.input.classList.remove('valid');
  refs.input.classList.add('invalid');
}
}

