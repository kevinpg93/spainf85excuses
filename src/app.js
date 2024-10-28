/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function randomPosition(array) {
    let random1 = Math.floor(Math.random() * array.length);
    return random1;
  }

  // let random1 = Math.floor(Math.random() * who.length);
  // let random2 = Math.floor(Math.random() * action.length);
  // let random3 = Math.floor(Math.random() * what.length);
  // let random4 = Math.floor(Math.random() * when.length);

  // console.log(randomPosition(who));
  document.getElementById("excuse").innerHTML =
    who[randomPosition(who)] +
    " " +
    action[randomPosition(action)] +
    " " +
    what[randomPosition(what)] +
    " " +
    when[randomPosition(when)];
};
