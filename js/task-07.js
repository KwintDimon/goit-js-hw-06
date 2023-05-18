const fontSizeControl = document.querySelector('#font-size-control');
console.log(fontSizeControl);
const textEl = document.querySelector('#text');
console.log(textEl)

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value;
  textEl.style.fontSize = `${fontSize}px`;
})