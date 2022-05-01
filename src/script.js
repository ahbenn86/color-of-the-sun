const blueButton = document.querySelector("#blue_button");
const redButton = document.querySelector("#red_button");
const yellowButton = document.querySelector("#yellow_button");
const sunCircle = document.querySelectorAll(".sun-circle");

blueButton.addEventListener("click", () => {
  blueSun();
});
redButton.addEventListener("click", () => {
  redSun();
});
yellowButton.addEventListener("click", () => {
  yellowSun();
});

function blueSun() {
  document.getElementById("sun_circle").style.background = "blue";
  document.getElementById("character").innerHTML =
    '<img src="../public/cookie-monster.png" class="cookie-monster" id="cookie_monster" alt="cookie monster character">';
}
function redSun() {
  document.getElementById("sun_circle").style.background = "red";
  document.getElementById("character").innerHTML =
    '<img src="../public/elmo.png" class="elmo" id="elmo" alt="elmo character">';
}
function yellowSun() {
  document.getElementById("sun_circle").style.background = "yellow";
  document.getElementById("character").innerHTML =
    '<img src="../public/big-bird.png" class="big-bird" id="big_bird" alt="big bird character">';
}
