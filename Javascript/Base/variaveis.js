//Variaveis
// Guardar informações em uma caixinha

var clima = "quente"
console.log(clima) //retornará quente
clima = "frio"
console.log(clima) //retornará frio

// a variavel let funciona da mesma forma, já a variavel const não pode ser alterada
const clima2 = "wow"
clima2 = "woww"
//problema acima! constante sendo alterada

//-----------------------SCOPES------------------------------ 
// variavel var é global, pode ser lida antes, dentro ou depois do escopo que foi declarada
console.log("lendo aqui antes", x) //sabe que existe mas nao le o valor!! retorna undefined

{//escopo da variavel var
    var x = 10
}
console.log("lendo aqui depois", x) // existe e tem valor de 10!


//const e let só funcionam e existem no escopo em que foram criadas (nao fazem hoisting)
console.log("lendo let aqui antes", y) //sabe que existe, mas retorna um erro de fora de escopo
console.log("lendo const aqui antes", z) //same

{//escopo da variavel var
    let y = 15
    const z = 20

    console.log("lendo let aqui dentro", y) //sabe e sabe o valor, retorna perfeitamente
    console.log("lendo const aqui dentro", z) //same
}

console.log("lendo let aqui depois", y) //sabe que existe, mas retorna um erro de fora de escopo
console.log("lendo const aqui depois", z) //same

