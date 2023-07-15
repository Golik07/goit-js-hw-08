import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const text = document.querySelector('input');
const textarea = document.querySelector('textarea');

onTextTextarea();

function formInput() {
  const formData = {
    email: text.value,
    message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onTextTextarea() {
  const message = localStorage.getItem('feedback-form-state');
  if (message) {
    const parsedData = JSON.parse(message);
    text.value = parsedData.email;
    textarea.value = parsedData.message;
  }
}

const clearFormData = () => {
  localStorage.removeItem('feedback-form-state');
  text.value = '';
  textarea.value = '';
};

function formSubmit(e) {
  e.preventDefault();
  const formData = {
    email: text.value,
    message: textarea.value,
  };

  if ({ email } === '' || { message } === '') {
    return alert('Нужно все поля заполнить');
  }
  console.log(formData);
  clearFormData();
}

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));
