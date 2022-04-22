function exercise06() {
  // Complete the code of the function
  let dataEx = JSON.parse(localStorage.getItem('ex-06-data'));
  const cityNames = document.querySelector('.ex-list');

  dataEx.forEach( (city) => {
    let cityChild = document.createElement('li');
    cityChild.textContent = city.name;
    cityNames.appendChild(cityChild);
  });
}

export default exercise06;
