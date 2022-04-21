function exercise03() {
  // Complete the code of the function
  localStorage.setItem('ex-03-city', 'Madrid');

  document.getElementById('name').textContent = localStorage.getItem('ex-03-city');

  localStorage.removeItem('ex-03-city');
}

export default exercise03;
