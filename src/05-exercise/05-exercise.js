function exercise05() {
  // Complete the code of the function
  let cityName = localStorage.getItem('ex-05-city');

  if (cityName){
    document.querySelector('#name').textContent = cityName;
  }else 
  localStorage.setItem('ex-05-city', 'Barcelona')
  document.querySelector('#name').textContent = 'Barcelona';
}

export default exercise05;
