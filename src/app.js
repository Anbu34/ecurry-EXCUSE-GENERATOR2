import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  let who = ["The dog", "my grandma", "The mailman", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = ["before class", "when i was sleeping", "while i was exercising", "during my lunch"];

function generateExcuse(){

  let whorandom = who[Math.floor(Math.random() * who.length)];
  let actionrandom = action[Math.floor(Math.random() * action.length)];
  let whatrandom = what[Math.floor(Math.random() * what.length)];
  let whenrandom = when[Math.floor(Math.random() * when.length)];
  

  let excuse = `My excuse: ${whorandom} ${actionrandom} ${whatrandom} ${whenrandom} `;
  document.getElementById("excuse").innerHTML = excuse;

}

window.onload = generateExcuse;

