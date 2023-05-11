let num1
let num2
let NumVerificarion = true

while (NumVerificarion==true) {
    num1 = prompt ("Insira o primeiro número (somente números)")
    NumVerificarion = isNaN(Number(num1))
    if (NumVerificarion==true) {
        alert (`${num1} não é um valor válido`)
    }
    num1 = Number(num1)
}

NumVerificarion = true
while (NumVerificarion==true) {
    num2 = prompt ("Insira o segundo número (somente números)")
    NumVerificarion = isNaN(Number(num2))
    if (NumVerificarion==true) {
        alert (`${num2} não é um valor válido`)
    }
    num2 = Number(num2)
}

let sum = num1+num2
let subtraction =num1-num2
let multiplication = num1*num2;
let division = num1/num2;
let remainder = num1%num2;


alert (`A soma dos dois números é: ${sum}`)
alert (`A subtração dos dois números é: ${subtraction}`)
alert (`A multiplicação dos dois números é: ${multiplication}`)
alert (`A divisão dos dois números é: ${division}`)
alert (`O resto da divisão dos dois números é: ${remainder}`)

if (sum%2 === 0) {
    alert (`A soma dos dois números é par: ${sum}`)
} else {
    alert (`A soma dos dois números é ímpar: ${sum}`)
}

if (num1 === num2) {
    alert (`Os números inseridos são iguais.`)
} else {
    alert (`Os números inseridos são diferentes.`)
}