import "./styles.scss";
import pokemon from "pokemon";
import is from "is_js";

if (is.firefox()) {
  console.log("yeah");
}
const fakeJson = ["jonas", "jonas"];

fakeJson.forEach((el) => {
  const t = document.createElement("img");
  t.src = el + ".jpg";
  document.body.appendChild(t);
});

//const pokemon = require("pokemon");

console.log(pokemon.all());
//=> ['Bulbasaur', …]

pokemon.random();
//=> 'Snorlax'

pokemon.getName(147);
//=> 'Dratini'

pokemon.getId("Dratini");
//=> 147
