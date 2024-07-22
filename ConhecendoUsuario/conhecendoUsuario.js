//CRIANDO VARIAVEIS
let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let altura = prompt("Digite sua altura")
let peso = prompt("Digite seu peso")
let profissao = prompt("Digite sua profissão")

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "m de altura e pesa " + peso + "Kg.")

//VERIFICANDO IDADE
if (idade >= 18){
    console.log("Está liberado para tomar algumas geladas")
}else{
    console.log("Sem gelada para você")
}

//DESCOBRINDO IDADE FRACIONADA
let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("Sua idade em meses é " + meses)
console.log("Sua idade em semanas é " + semanas)
console.log("Sua idade em dia é " + dias)

//DESCOBRINDO IMC
let imc = peso / (altura * altura)
if (imc < 18.5){
    console.log("Magreza")
}else if (imc >= 18.5 &&  imc <= 24.9){
    console.log("Normal")
}else if (imc >= 25 &&  imc <= 30){
    console.log("Sobrepeso")
}else{
    console.log("Obesidade")
}

//DESCOBRINDO O ANO DE NACIMENTO
let anoAtual = 2024
let anoNacimento = anoAtual - idade
console.log("Você nasceu em " + anoNacimento)

//EXIBINDO ANOS E IDADES
let anosVividos = anoNacimento
let idadeAtual = 0

for (let anosVividos = anoNacimento; anosVividos <= anoAtual; anosVividos++){
    console.log(anosVividos + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}

//LOOP WHILE
do {
    let continuar = prompt("Deseja inserir os dados novamente? (s/n)")
}while(continuar == "s")

