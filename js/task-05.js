// const inputEl = document.querySelector('#name-input');

// const outputEl = document.querySelector('#name-output');

// inputEl.addEventListener('input',function () {
//   const nameEl = inputEl.value;
//   if (nameEl !== '') {
//     outputEl.textContent = nameEl;
//   }
//   else {
//     outputEl.textContent='Anonymous';
//   }
// })

const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value !== '') {
    refs.output.textContent = event.currentTarget.value;
  }
  else {
    refs.output.textContent='Anonymous';
  }
  
}