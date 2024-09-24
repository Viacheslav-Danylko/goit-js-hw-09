let formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

function saveFormData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  saveFormData();
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  form.reset();
  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
}

populateForm();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);
