(() => localStorage.setItem("ex-01-name", "Alex Parks"))();

function exercise01() {
  // Complete the code of the function
  let $name = document.getElementById("name");
  localStorage.getItem("ex-01-name");

  $name.textContent = "My name is: " + localStorage.getItem("ex-01-name");
}

export default exercise01;
