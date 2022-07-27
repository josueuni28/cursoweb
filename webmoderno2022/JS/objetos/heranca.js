const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 310
}

console.log(ferrari.__proto__)
/* Com o atributo __proto__ é possível acessar os níveis mais altos da herança para
buscar alguma metodo ou atributo que já exista em objetos pais */
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)
// Não existe nada acima de Object.prototype, ele é a hierarquia mais alta

function MeuObjeto() {
    //...
}

console.log(typeof Object,     typeof MeuObjeto,   typeof ferrari)
console.log(Object.prototype,  MeuObjeto.prototype)

console.log(ferrari.prototype) // gera undefined
// A propriedade "prototype" só está disponível em Funções

//--------------------------------------------------------------------------------------------
console.log('\n#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#\n')

Object.prototype.attr0 = '0' // Definindo um atributo diretamente na Hierarquia mais alta
// Não é recomendado, a não ser casos bem específicos, pois isso afeta todos os objetos.

const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B', attr3: 'H' } // Usando o termo "__proto__:" para definir a herança 
const filho = {__proto__: pai, attr3: 'C'}
/* Mesmo definindo também o "attr3" no Objeto de herança, como o filho também possúi o mesmo atributo, 
   o atributo do filho (Que é a referência nesse exemplo) sobrescreve o da herança (Shadowing)*/

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3, '|', pai.attr3)

const carro = {
    veloAtual: 0,
    veloMax: 180,
    acelerarMais(delta){
        if(this.veloAtual+delta <= this.veloMax){
            this.veloAtual += delta
        }else{
            this.veloAtual = this.veloMax
        }
    },
    status(){
        return `Velocidade ${this.veloAtual}km/h | ${this.veloMax}km/h`
    }
}

const jeep = {
    modelo: 'J40',
    status(){
        return `Modelo ${this.modelo}: ${super.status()}`
        // Usando o método "super" para referenciar a herança (Nesse caso pegar uma função da herança)
    }
}

const nissan = {
    modelo: 'SS40',
    veloMax: 250 // Shadowing (Sobrescrevendo o mesmo atributo)
}

// Outra forma de criar herança
Object.setPrototypeOf(jeep, carro)
Object.setPrototypeOf(nissan, carro)

console.log(jeep)
console.log(nissan)
// Mesmo os objetos com herança não mostra os atributos dos objetos Pais, apenas os que foram definido neles

console.log('Jeep:')

jeep.acelerarMais(100)
console.log(jeep.status())
jeep.acelerarMais(100) // Atingindo a veloMax que está no objeto Pai, nesse caso o limite de 180km/h
console.log(jeep.status())

console.log('Nissan:')

nissan.acelerarMais(100)
console.log(nissan.status())
nissan.acelerarMais(100) // Nissan não é limitado porque foi defido veloMax em 250km/h
console.log(nissan.status())