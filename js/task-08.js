const formEl = document.querySelector('.login-form')
console.log(formEl)

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget
  if (!email.value || !password.value) {
    return alert('Please fill in all the fields!')
  } 
    const userDetails = {
      email: email.value,
      password: password.value
    
  }
  console.log(userDetails);
  event.currentTarget.reset()
  });
