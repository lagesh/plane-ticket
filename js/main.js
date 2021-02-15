let passengerName1 = document.querySelector('.name');
let passengerName2 = document.querySelector('.stub-name');
// console.log(passengerName2, passengerName1);

let passengerName = [passengerName1, passengerName2];
passengerName.forEach(name => {
  name.style.visibility = 'hidden';
})