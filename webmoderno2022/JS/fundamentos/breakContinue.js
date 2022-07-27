/*
 IMPORTANTE: Evitar o uso de "break"/"continue" e principalmente usando rótulos
 Existem formas mais elaboradas e legíveis para substituir essas estruturas

 Aqui ficaram para efeito de conhecimento
 */

 const sequencia = [1,2,3,4,5,6,7,8,9]

 for (const i in sequencia) {
    if(i == 5){
        // "break" só para o bloco atual, para interromper outro bloco usar o rótulo
        break
    }
    console.log(`index ${i} => valor: ${sequencia[i]}`)
 }

 for (const a in sequencia) {
    if(a == 5){
        // "continue" interrompe o laço atual e vai no próximo laço de repetição, usar um rotulo para ir em outro
        continue
    }
    console.log(`index ${a} => valor: ${sequencia[a]}`)
 }

// Exemplo usando rótulo
 interrompe: for (const i in sequencia) {
    for(const a in sequencia){
        console.log(`i:${i}, a:${a}`)
        
        if(i == 2 && a == 3){
            break interrompe
        }
    }
 }