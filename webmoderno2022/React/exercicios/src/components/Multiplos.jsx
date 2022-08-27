import React from "react";


export const Pergunta1 = props => <em>Do que você precisa {props.nome}?</em>

export const Pergunta2 = props => <em>Vamos começar nosso projeto {props.nome}?</em>

/* OBS: Se você quiser tirar os 'exports' na frente dos componentes, você pode, mas nesse caso, 
   precisa chamar no final (Antes do 'export default', se tiver colocado):
   
   export { Pergunta1, Pergunta2 }
   
   E assim consegue acessar da mesmo forma lá, com o 'destructuring' */


// Sem o 'export default', você consegue acessar os componentes com o método 'destructuring' no 'index.js'
/* Com o 'export default', você pode acessar como um Objeto lá, como dar lá o nome de 'Blabla' e
   acessar 'Blabla.Pergunta1' */
export default { Pergunta1, Pergunta2 }