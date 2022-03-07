/**
 * @jest-environment jsdom
 */

import exercise01 from "../01-exercise/01-exercise";

describe("01-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<h2 id="name">My name is:</h2>`;
    localStorage.setItem("ex-01-name", "Alex Parks");
  });

  test("read the value of `ex-01-name` from localStorage and add it to the h2", () => {
    exercise01();

    let text = document.querySelector("#name").textContent;

    expect(text).toMatch(/My name is: Alex Parks/i);
  });
});
