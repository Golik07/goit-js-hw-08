import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const text = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', formSubmit);

onTextTextarea();

const formValue = {};

form.addEventListener('input', throttle(formInput, 500));

function formInput(e) {
  formValue[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

function formSubmit(e) {
  e.preventDefault();

  const elements = e.currentTarget.elements;

  const email = elements.email.value;
  const message = elements.message.value;

  if (email === '' || message === '') {
    return alert('Нужно все поля заполнить');
  } else {
    const value = {
      email,
      message,
    };
    console.log(value);
    form.reset();
    localStorage.removeItem('feedback-form-state');
  }
}

function onTextTextarea() {
  const message = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (message) {
    text.value = message.email;
    textarea.value = message.message;
  }
}
