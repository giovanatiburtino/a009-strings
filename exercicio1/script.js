//Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:

const nome = prompt ("Qual é o seu nome?")
const comidaFavorita1 = prompt ("Cite sua comida favorita")
const comidaFavorita2 = prompt ("Cite sua segunda comida favorita")
const comidaFavorita3 = prompt ("Cite sua terceira comida favorita")

console.log(`
Estas são as comidas favoritas de ${nome}:
A primeira comida favorita é ${comidaFavorita1}
A segunda comida favorita é ${comidaFavorita2}
A terceira comida favorita é ${comidaFavorita3}.
`)
