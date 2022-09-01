var r1 = Math.random();
r1 *= 100;
r1 = Math.floor(r1) % 7;
if(r1===0)
   { r1++;}
//alert(r1);
// window.onload(document.getElementById("bot").innerHTML="Refresh Me!")
if (r1 === 1) {
  document.getElementById("img1").src = "./images/dice1.png";
}
if (r1 === 2) {
  document.getElementById("img1").src = "./images/dice2.png";
}
if (r1 === 3) {
  document.getElementById("img1").src = "./images/dice3.png";
}
if (r1 === 4) {
  document.getElementById("img1").src = "./images/dice4.png";
}
if (r1 === 5) {
  document.getElementById("img1").src = "./images/dice5.png";
}
if (r1 === 6) {
  document.getElementById("img1").src = "./images/dice6.png";
}

var r2 = Math.random();
r2 *= 100;
r2 = Math.floor(r2) % 7;
if(r2===0)
   { r2++;}
//alert(r2);

if (r2 === 1) {
  document.getElementById("img2").src = "./images/dice1.png";
}
if (r2 === 2) {
  document.getElementById("img2").src = "./images/dice2.png";
}
if (r2 === 3) {
  document.getElementById("img2").src = "./images/dice3.png";
}
if (r2 === 4) {
  document.getElementById("img2").src = "./images/dice4.png";
}
if (r2 === 5) {
  document.getElementById("img2").src = "./images/dice5.png";
}
if (r2 === 6) {
  document.getElementById("img2").src = "./images/dice6.png";
}


console.log(r2);
console.log(r1);
if (r1 > r2) {
  document.querySelector("h1").innerHTML="Player 1 Wins!";
} else if (r2 > r1) {
  document.querySelector("h1").innerHTML="Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML="Draw!";
}
