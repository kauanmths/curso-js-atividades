var num = [5,8,2,9,3]
num.push(1)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor em ordem crescente fica: ${num.sort()}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(9)
if(pos == -1){
    console.log('Esse valor não existe...')
}else{
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

