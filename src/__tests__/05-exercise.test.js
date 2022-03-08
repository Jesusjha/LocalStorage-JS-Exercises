import exercise05 from "../05-exercise/05-exercise";

describe("05-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<h2 id="name"></h2>`;
  });

  beforeEach(() => {
    localStorage.clear();
  });

  test("add the value in localStorage if it doesn’t exist and add it to the DOM", () => {
    exercise05();

    let name = document.querySelector("#name").textContent;

    expect(name).toBe("Barcelona");
  });

  test("read the value from localStorage and add it to the DOM", () => {
    localStorage.setItem("ex-05-city", "Barcelona");

    exercise05();

    let name = document.querySelector("#name").textContent;

    expect(name).toBe("Barcelona");
  });
});
