function exercise08() {
    let user = {
        name: "mark",
        age: 44,
    };

    // Complete the code of the function
    let lastEx = JSON.parse(localStorage.getItem("ex-08-users"));
    lastEx.push(user);
    let lastString = JSON.stringify(lastEx);
    localStorage.setItem("ex-08-users", lastString);
}

export default exercise08;
