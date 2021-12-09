var num = [5,8,2,9,3]
num.push(1)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor em ordem crescente fica: ${num.sort()}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// console.log(num) Exibição padrão de vetor

/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3]) Exibição de vetor feita de maneira errada
console.log(num[4])
console.log(num[5])


for(var pos = 0; pos < num.length; pos++){
    console.log(`O índice ${pos} recebe o valor ${num[pos]}`) //Outra maneira de exibição de vetor
}
*/

for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) //Maneira mais simplificada de exibição de vetor
}
