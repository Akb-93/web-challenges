console.clear();
const boxColor = document.querySelector('[data-js="input-color"]');
const boxRadius = document.querySelector('[data-js="input-radius"]');
const boxRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

boxColor.addEventListener("input", () => {
  const hue = boxColor.value;

  box.style.backgroundColor = `hsl(${hue},50%,50%)`;
});

boxRadius.addEventListener("input", () => {
  box.style.borderRadius =
    Number(boxRadius.value) === Number(boxRadius.max)
      ? "100%"
      : `${boxRadius.value}px`;
});

boxRotation.addEventListener("input", () => {
  box.style.transform = `rotate(${boxRotation.value}deg)`;
});
