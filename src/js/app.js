import getTooltip from "./tooltip";

const button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
  event.preventDefault();
  getTooltip(button);
});
