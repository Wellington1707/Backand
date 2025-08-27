import {soma, divisao} from "./index.js";

if (soma(1,1) === 2) {
    console.log("passou!");
}
else {
    console.log("Deu ruim!");
}
if (soma(1,0) === 1) {
    console.log("passou!");
}
else {
    console.log("Deu ruim!");
}
if (soma(1,-1) === 0) {
    console.log("passou!");
}
else {
    console.log("Deu ruim!");
}

if (divisao(1,1) === 1) {
    console.log("passou 4!");
}
else {
    console.log("Deu ruim 4!");
}
if (divisao(1,0) === Infinity) {
    console.log("passou 5!");
}
else {
    console.log("Deu ruim 5!");
}
if (divisao(6, 3) === 2) {
    console.log("passou 6!");
}
else {
    console.log("Deu ruim 6!");
}
