//CRIANDO VARIÁVEIS/LOOP
let confirmar = "n"
let salarioAtual
while(confirmar != "s"){
    let nome = prompt("Digite seu nome")
    let idade = parseInt (prompt("Digite sua idade"))
    salarioAtual = parseFloat (prompt("Digite seu salário atual"))
    console.log("Seu nome é " + nome + ", tem " + idade + " anos, e seu salário atual é: " + salarioAtual)
    confirmar = prompt("As informações estão corretas? (s/n)")
}

//FAZENDO PREVISÃO DO SALÁRIO
let aumento = 0.015
console.log("Previsão salarial para os próximos 10 anos:")

for(let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento
    aumento *= 2
    
    console.log((2024 + ano) + " = R$" + salarioAtual.toFixed(2))
}