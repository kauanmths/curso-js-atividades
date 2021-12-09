function fatorial(n){
    var fat = 1
    for(var c= n; n > 1; n--){
        //fat = fat * c
        fat *= c
    }
    return fat
}  
console.log(fatorial(5))