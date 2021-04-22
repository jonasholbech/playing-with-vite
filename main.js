import "./styles.scss";
import pokemon from "pokemon";

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
