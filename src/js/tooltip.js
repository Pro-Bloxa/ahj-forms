export function createTooltip() {
  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Tooltip title";
  const text = document.createElement("p");
  text.classList.add("text");
  text.textContent =
    "And here's some amazing content. It's very engaging. Right?";
  const tooltipBox = document.createElement("div");
  tooltipBox.classList.add("tooltip-box");
  tooltipBox.appendChild(title);
  tooltipBox.appendChild(text);
  return tooltipBox;
}

export default function getTooltip(button) {
  const tooltipBox = document.querySelector(".tooltip-box");
  if (tooltipBox === null) {
    const tooltip = createTooltip();
    console.log(tooltipBox);
    button.appendChild(tooltip);
    tooltip.style.bottom = `${button.offsetHeight + 5}px`;
    tooltip.style.left = `${
      button.offsetWidth / 2 - tooltip.offsetWidth / 2
    }px`;
  } else {
    tooltipBox.remove();
  }
}
