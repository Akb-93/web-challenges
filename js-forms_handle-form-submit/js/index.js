console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const formElements = event.target.elements; // Get form elements

  console.log(formElements);
  formElements.firstName.focus();
  console.log(formElements.firstName.value);
  event.target.reset();
});
