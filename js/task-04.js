const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
console.log(btnDecrementEl)
console.log(btnIncrementEl)
const counterEl = document.querySelector('#value')
console.log(counterEl)


const counterValue = {
  value: 0,
  decrement() {
    this.value-=1
  },
   increment() {
    this.value+=1
  },
}

btnIncrementEl.addEventListener('click', function () {
  counterValue.increment()
  counterEl.textContent=counterValue.value
} 
)
  
btnDecrementEl.addEventListener('click', function () {
  counterValue.decrement()
  counterEl.textContent=counterValue.value
} 
  )