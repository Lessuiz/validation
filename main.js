const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const submit = document.querySelector('button');
const errorDiv = document.querySelector('.error-div');

const showError = function () {
  const email = document.getElementById('email');

  if (email.validity.typeMismatch) {
    const error = document.createElement('div');
    error.className = 'error';
    error.textContent = 'email is invalid';
    errorDiv.appendChild(error);
  }
  
  inputs.forEach((input) => {
    if (input.validity.valueMissing) {
      const newError = document.createElement('div');
      newError.className = 'error';
      newError.textContent = `${input.name} is required`;
      errorDiv.appendChild(newError);
    }
  });
}

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      input.className = 'valid';
    } else {
      input.className = 'invalid';
    }
  });
});

submit.addEventListener('click', (event) => {
  event.preventDefault();
  errorDiv.innerHTML = '';
  if (!form.checkValidity()) {
    errorDiv.className = 'error-div active';
    showError();
  } else {
    const success = document.createElement('div');
    success.className = 'success';
    success.textContent = 'This form is valid';
    errorDiv.appendChild(success);
  }


});
