const inputEl = document.querySelector('#name-input');

console.log(inputEl)

const outputEl = document.querySelector('#name-output');

console.log(outputEl)

inputEl.addEventListener('input',function () {
  const nameEl = inputEl.value;
  if (nameEl !== '') {
    outputEl.textContent = nameEl;
  }
  else {
    outputEl.textContent='Anonymous';
  }
})