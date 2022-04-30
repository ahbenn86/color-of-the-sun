const greenButton = document.querySelector('#green_button');
const redButton = document.querySelector('#red_button');
const yellowButton = document.querySelector('#yellow_button');
const sunCircle = document.querySelectorAll('.sun-circle');

greenButton.addEventListener('click', () => {
    greenSun()
})
redButton.addEventListener('click', () => {
    redSun()
})
yellowButton.addEventListener('click', () => {
    yellowSun()
})

function greenSun(){
 document.getElementById('sun_circle').style.background = "green";
}
function redSun(){
 document.getElementById('sun_circle').style.background = "red";
}
function yellowSun(){
 document.getElementById('sun_circle').style.background = "yellow";
}