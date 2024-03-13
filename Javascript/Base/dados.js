//Javascript é uma linguagem cheia de protótipos
//ao escrever {} e logar, podemos ver __proto__:object
//isso é um prototype ascendente que foi criado na biblioteca do javascript
//assim como strings tem métodos como length e etc.

//ALTERAR TIPO DE DADO
//type conversion e type coercion

const string = "9"
console.log(Number(string) + 5) //return 14
//conversao do 9 para um numero

//alterar formatação de numero real
let number = 9345.54354353423
console.log(number.toFixed(2)) //mostra apenas duas casas decimais
console.log(number.toFixed(2).replace(".", ",")) //mostra apenas duas casas e troca o . por ,

//Maiusculas e minusculas
let word = "PrOgRaMaR"
console.log(word.toLowerCase()) // toda minusculas
console.log(word.toUpperCase()) //toda maiusculas

//Separar string por caracter
let phrase = "Luisa doida eeee"
let arrayDaFrase = phrase.split(" ")
console.log(arrayDaFrase)
// agora vou juntar com _
let fraseNova = arrayDaFrase.join("_")
console.log(fraseNova)

//Verifique preença de algo em uma string
let fraseTeste = "eu amo o victor"
console.log(fraseTeste.includes("victor")) //true se a frase inclui victor e false caso nao

// ----------------------------------------------------------------
//manipulando arrays

//adicionar item no fim do array
let meuAmor = ["zoioPiqueno", "Sorriso lindo", "boca apaixonante"]
meuAmor.push("peleLinda")

//adicionar ao fim
meuAmor.unshift("peleLinda")

//remover do fim
meuAmor.pop()

//remover do inicio
meuAmor.shift()

//pegar apenas uma parte do array, de uma posição à outra
meuAmor.slice(0,2)

//pegar index do array, de uma posição
meuAmor.indexOf
console.log(meuAmor)