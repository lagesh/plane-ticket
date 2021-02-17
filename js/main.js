let passengerName1 = document.querySelector('.name');
let passengerName2 = document.querySelector('.stub-name');

let passengerName = [passengerName1, passengerName2];
passengerName.forEach(name => {
  name.style.visibility = 'hidden';
});

let passengerInput = document.getElementById('name');
let input = document.querySelector('input');
// console.log(passengerInput, input);

let inputValue = () => {
  passengerName.forEach(name => {
    name.style.visibility = 'visible';
    name.innerHTML = input.value.toUpperCase();
  });
}

passengerInput.oninput = inputValue;

function refresh() {
  passengerName.forEach(name => {
    name.style.visibility = 'hidden';
  });
}
let refreshButton = document.getElementById('refreshButton');
refreshButton.onclick = refresh;