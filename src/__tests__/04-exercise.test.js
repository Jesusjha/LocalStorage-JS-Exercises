import exercise04 from "../04-exercise/04-exercise";

describe("04-exercise", () => {
  beforeAll(() => {
    document.body.innerHTML = `<ul class="list">
    <li class="city"></li>
    <li class="name"></li>
    <li class="country"></li>
  </ul>`;

    localStorage.setItem("ex-04-city", "Sevilla");
    localStorage.setItem("ex-04-name", "Ana Parks");
    localStorage.setItem("ex-04-country", "Spain");
  });

  test("read the values from localStorage and then remove all of them", () => {
    exercise04();

    let list = document.querySelectorAll(".list li");

    let names = ["Sevilla", "Ana Parks", "Spain"];

    expect(localStorage.getItem("ex-04-city")).toBeNull();
    expect(localStorage.getItem("ex-04-name")).toBeNull();
    expect(localStorage.getItem("ex-04-country")).toBeNull();
    expect(localStorage.length).toBe(0);

    list.forEach((el) => expect(names).toContain(el.textContent));
  });
});
