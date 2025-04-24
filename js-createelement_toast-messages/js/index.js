console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

console.log(addButton, toastContainer, clearButton);
// Exercise: Append a new entry to the toast messages container
addButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("hi");
  const listElement = document.createElement("li");
  listElement.textContent = "A new Toast";
  listElement.className = "toast-container__message";
  toastContainer.append(listElement);
});

clearButton.addEventListener("click", () => {
  toastContainer.textContent = "";
});
