function soma (a, b) {
    return (a+b);
}
module.exports = {soma};

function multiplicacao (a, b) {
    return (a*b);
}

function divisao (a, b) {
    if (b === 0) throw Error("Divisao por zero!");
        return (a/b);
}
module.exports = {divisao,soma,multiplicacao}