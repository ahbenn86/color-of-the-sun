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
  document.getElementById("thats-correct").innerHTML = "";
  document.getElementById("sun_circle").style.background = "";
  document.getElementById("character").innerHTML =
    '<img src="./public/cookie-monster.png" class="cookie-monster" id="cookie_monster" alt="cookie monster character">';
  document.getElementById("chat_bubble").innerHTML =
    '<img src="./public/blue-bubble.png" id="blue_bubble">';
  document.getElementById("street_sign").style.opacity = "0";
}
function redSun() {
  document.getElementById("thats-correct").innerHTML = "";
  document.getElementById("sun_circle").style.background = "";
  document.getElementById("character").innerHTML =
    '<img src="./public/elmo.png" class="elmo" id="elmo" alt="elmo character">';
  document.getElementById("chat_bubble").innerHTML =
    '<img src="./public/red-bubble.png" id="red_bubble">';
  document.getElementById("street_sign").style.opacity = "0";
}
function yellowSun() {
  document.getElementById("sun_circle").style.background = "yellow";
  document.getElementById("character").innerHTML =
    '<img src="./public/big-bird.png" class="big-bird" id="big_bird" alt="big bird character">';
  document.getElementById("thats-correct").innerHTML =
    '<img src="./public/thats-correct.png" alt="#">';
  document.getElementById("chat_bubble").innerHTML =
    '<img src="./public/yellow-bubble.png" id="yellow_bubble">';
  document.getElementById("street_sign").style.opacity = "0";
}
