//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
let guardaFrase = ("Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"")

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
let novaFrase = guardaFrase.replaceAll("verde", "rosa").replace("azul", "laranja")

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
let checarVerde = novaFrase.includes("verde")
let checarLaranja = novaFrase.includes("laranja")

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
let fraseMaiuscula = guardaFrase.toUpperCase()

console.log(guardaFrase)
console.log(novaFrase)
console.log("A frase inclui verde?", checarVerde)
console.log("A frase inclui laranja?", checarLaranja)
console.log(fraseMaiuscula)