import exercise07 from "../07-exercise/07-exercise";

describe("07-exercise", () => {
  test("store in localStorage the ex-07-users key", () => {
    exercise07();

    let users = [
      {
        name: "alex",
        age: 24,
      },
      {
        name: "ana",
        age: 34,
      },
    ];

    let data = JSON.parse(localStorage.getItem("ex-07-users"));

    expect(users).toMatchObject(data);
  });
});
