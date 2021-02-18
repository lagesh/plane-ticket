let passengerName1 = document.querySelector('.name');
let passengerName2 = document.querySelector('.stub-name');

let passengerName = [passengerName1, passengerName2];
/*
passengerName.forEach(name => {
  name.style.visibility = 'hidden';
});
*/
let passengerInput = document.getElementById('name');
let input = document.querySelector('input');

/*function refresh() {
  let passName = document.getElementsByClassName('passenger');
  passName.style.margin = "15px 20px"
}
*/
function inputValue() {
  passengerName.forEach(name => {
    // name.style.visibility = 'visible';
    name.innerHTML = input.value.toUpperCase();
    if (input.value.length === 0) {
      name.innerHTML = '---';
    }
  });

}
passengerInput.oninput = inputValue;

