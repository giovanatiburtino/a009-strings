const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString.length)

//a) Remova o excesso de espaços no final da string;
const removerExcesso = (minhaString.trim())

console.log(removerExcesso)

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(removerExcesso.length)

//c) Substitua os traços `________` por “sticioso”.
const novaString = minhaString.replaceAll("________", "sticioso")

console.log(novaString)

