/**
 * @jest-environment jsdom
 */

import exercise03 from "../03-exercise/03-exercise";

describe("03-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<div class="ex-wrapper">
    <h2 id="name"></h2>
  </div>`;
    localStorage.setItem("ex-03-city", "Madrid");
  });

  test("read the value of `ex-03-city` from localStorage and then remove it", () => {
    exercise03();

    let text = document.querySelector("#name").textContent;
    let storage = localStorage.getItem("ex-03-city");

    expect(text).toBe("Madrid");
    expect(storage).toBeNull();
  });
});
