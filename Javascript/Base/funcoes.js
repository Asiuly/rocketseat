//declaração da função
function criarFrases(){
    console.log("criando frase 1")
    console.log("criando frase 2")
    console.log("criando frase 3")
} 

//executar função
//criarFrases()
//-------------------------------------------
//função atribuida à variavel
const sum = function(number1, number2) {
    console.log(number1 + number2)//argumentos só existem no escopo da função
}

//essa função vai retornar o valor e não imprimi-lo
const sumReturn = function(number1, number2) {
    return number1 + number2

}
//chamando função com argumentos
sum(1,2) //essa imprime dentro da função

console.log(`soma de 2 e 4 ${(sum(2,4))}`) //undefined
console.log((sumReturn(2,4))) //retorna 6

//ARROW FUNCTIONS 

//declaração de função válida
//quando se atribui a função à uma const ao inves de nomea-la, ela só vai poder
//ser acessada após ser declara, diferente de sua declaração com function
//que permite que ela seja utilizada antes de sua declaração por Hoisting
const sayMyName = () => {
    console.log("Luisaa")
}

sayMyName();

//---------------------------------------------------------------------------
//Callbacks

function sayMyName1(name) {
    console.log(name)
}

//chamando minha função e passando uma outra função como argumento
sayMyName1(
    () => {
        console.log("Estou em uma callback")
    }
)

//---------------------------------------------------------------------------
//FUNCOES CONSTRUTORAS

function Person(name){
    this.name = name,
    this.walk = () => {
        return this.name + " está andando"
    }
}

//fazendo luisa ser um objeto de Person
const Luisa = new Person("Luisa")
const Joao = new Person("Joao")

//dois objetos da mesma função que tem seus nomes atribuitos por parametros
// atraves da palavra chave THIS
console.log(Luisa.walk())
console.log(Joao.walk())
