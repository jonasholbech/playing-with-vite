import "./styles.scss";

const fakeJson = ["jonas", "jonas"];

fakeJson.forEach((el) => {
  const t = document.createElement("img");
  t.src = el + ".jpg";
  document.body.appendChild(t);
});
