function soma(){
    let total = 0
    for (let i in arguments) {
        if(typeof arguments[i] === 'number') total += arguments[i]
    }

    return total
}

console.log(soma())
console.log(soma(1))
console.log(soma(3,5))
console.log(soma(9,'Ola',1))
console.log(soma('1',2,3))