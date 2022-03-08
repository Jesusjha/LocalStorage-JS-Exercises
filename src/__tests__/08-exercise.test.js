import exercise08 from "../08-exercise/08-exercise";

describe("08-exercise", () => {
  beforeAll(() => {
    localStorage.setItem(
      "ex-08-users",
      JSON.stringify([
        {
          name: "alex",
          age: 24,
        },
        {
          name: "ana",
          age: 34,
        },
      ])
    );
  });

  test("read from localStorage the ex-08-users key and add a new user", () => {
    exercise08();

    let users = [
      {
        name: "alex",
        age: 24,
      },
      {
        name: "ana",
        age: 34,
      },
      {
        name: "mark",
        age: 44,
      },
    ];

    let data = JSON.parse(localStorage.getItem("ex-08-users"));

    expect(users).toMatchObject(data);
  });
});
