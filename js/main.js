let passengerName1 = document.querySelector('.name');
let passengerName2 = document.querySelector('.stub-name');
// console.log(passengerName2, passengerName1);

let passengerName = [passengerName1, passengerName2];
passengerName.forEach(name => {
  name.style.visibility = 'hidden';
});

let passengerInput = document.getElementById('name');
let input = document.querySelector('input');
passengerInput.addEventListener('input', function () {
  passengerName.forEach(name => {
    name.innerHTML = input;
    name.style.visibility = 'visible';
  });
})