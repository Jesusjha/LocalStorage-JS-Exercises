/**
 * @jest-environment jsdom
 */

import exercise06 from "../06-exercise/06-exercise";

describe("06-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="ex-list"></ul>`;

    let data = JSON.stringify([
      { name: "Barcelona" },
      { name: "Madrid" },
      { name: "Sevilla" },
    ]);

    localStorage.setItem("ex-06-data", data);
  });

  test("read from localStorage the ex-06-data key and create li elements", () => {
    exercise06();

    let lis = document.querySelectorAll(".ex-list li");

    let names = ["Barcelona", "Madrid", "Sevilla"];

    expect(lis.length).toBe(3);

    lis.forEach((li) => {
      expect(names).toContain(li.textContent);
    });
  });
});
