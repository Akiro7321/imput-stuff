
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('name');

  const name = nameInput.value;
  localStorage.setItem('name', name);

})

const tomatos = localStorage.getItem('name');

console.log(tomatos);
