import style from  "./style.css";
import logo from "./assets/webpack.svg";
import poke from "./assets/poke-pink.png"

const arr = [1,2,3],
codeESNext = () => console.log(...arr);


console.log("Hola mundo sin configuracion con webpack");

codeESNext();

// document.getElementById("app").innerHTML = `<img src= "${logo}" alt="Webpack">`;

const d= document,
$app= d.getElementById("app"),
$h1= d.createElement("h1"),
$logo= d.createElement("img"),
$img= d.createElement("img");

$h1.textContent = "Hola mundo con webpack";
$logo.src = logo;
$logo.classList.add("icon");
$img.src = poke;

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($img);
