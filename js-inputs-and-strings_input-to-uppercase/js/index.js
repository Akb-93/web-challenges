const input = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  const inputValue = input.value;
  const uppercaseValue = inputValue.toUpperCase();
  input.value = uppercaseValue;
});
