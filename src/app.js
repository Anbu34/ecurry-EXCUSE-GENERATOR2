import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ["The dog", "my grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", crushed, "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = ["before class", "when i was sleeping", "while i was exercising", "during my lunch"];

  let randomNumber1 = (Math.random() * who.length);
  let randomNumber2 = (Math.random() * action.length);
  let randomNumber3 = (Math.random() * what.length);
  let randomNumber4 = (Math.random() * when.length);
  
  let theWho = who[randomNumber1];
  let theAction = action[randomNumber2]
  let theWhat = what[randomNumber3]
  let theWhen = when[randomNumber4]

  let excuse = theWho + theAction + theWhat + theWhen ;

  console.log(excuse);
  let HTMLElement = document.querySelector("#excuse");

  HTMLElement.innerHTML = excuse ;

};
