/**
 * @jest-environment jsdom
 */

import getTooltip, { createTooltip } from "../tooltip";

test("check function createTooltip", () => {
  document.body.innerHTML =
    "<div class='tooltip-box'><h2 class='title'>Tooltip title</h2><p class='text'>And here's some amazing content. It's very engaging. Right?</p></div>";
  const expected = document.querySelector(".tooltip-box");
  const result = createTooltip();
  expect(result).toEqual(expected);
});

test("check function getTooltip", () => {
  document.body.innerHTML = `<div class='form'>
  <button class='btn'>Click to toggle popover</button>
</div>`;
  const button = document.querySelector(".btn");
  getTooltip(button);
  const expected = document.querySelector(".tooltip-box");
  const result = document.querySelector(".tooltip-box");
  expect(result).toEqual(expected);
});

test("check tooltipBox.remove() in function getTooltip", () => {
  document.body.innerHTML = `<div class="form">
  <button class="btn">Click to toggle popover<div class="tooltip-box"><h2 class="title">Tooltip title</h2><p class="text">And here's some amazing content. It's very engaging. Right?</p></div></button>
</div>`;
  const button = document.querySelector(".btn");
  getTooltip(button);

  const result = document.querySelector(".tooltip-box");
  expect(result).toBeNull();
});
