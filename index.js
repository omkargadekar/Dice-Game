var randomNumber1 = Math.round(Math.random() * 7);

var imgArray = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

var image1 = imgArray[randomNumber1];
var huhu = document.querySelectorAll("img")[0];
huhu.setAttribute("src", image1);

var randomNumber2 = Math.round(Math.random() * 7);

var imgArray = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

var image2 = imgArray[randomNumber2];

var huhu2 = document.querySelectorAll("img")[1];
huhu2.setAttribute("src", image2);

if (image1 > image2) {
  document.querySelectorAll("h1")[0].innerHTML = "PLAYER ONE WINS!";
} else if (image1 < image2) {
  document.querySelectorAll("h1")[0].innerHTML = "PLAYER TWO WINS!";
} else {
  document.querySelectorAll("h1")[0].innerHTML = "DRAW!";
}
