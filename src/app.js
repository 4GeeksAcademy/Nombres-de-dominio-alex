/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];

pronouns.forEach(pronouns => {
  adjs.forEach(adj => {
    nouns.forEach(noun => {
      console.log(pronouns + adj + noun);
    });
  });
});
