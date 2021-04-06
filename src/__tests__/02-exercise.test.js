import exercise02 from "../02-exercise/02-exercise";

describe("02-exercise", () => {
  test("store in localStorage `ex-02-city = Barcelona`", () => {
    exercise02();

    let text = localStorage.getItem("ex-02-city");

    expect(text).toMatch(/Barcelona/i);
  });
});
