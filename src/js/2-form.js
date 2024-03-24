const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const textarea = form.elements.message;
const input = form.elements.email;

const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (storage) {
  textarea.value = storage.message;
  input.value = storage.email;
} else {
  textarea.value = '';
  input.value = '';
}

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const message = formElements.message.value.trim();
  const formData = { email, message };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value.trim();
  const message = formElements.message.value.trim();
  if (email === '' || message === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = { email, message };
    console.log(formData);
    form.reset();
  }
  localStorage.removeItem(STORAGE_KEY);
}
