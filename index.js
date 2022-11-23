var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var img1Path = "images/" + "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", img1Path);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var img2Path = "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", img2Path);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "layer 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
