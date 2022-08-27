import React from "react";


// Criando um Componente com Propriedades e com mais de uma tag
export default props =>
    <>
        <h2>Bom dia {props.nome}!</h2>
        <strong>Como você está?</strong>
    </>


/*
Ou você pode usar simplesmente:
    <>
        // Suas tags aqui...
    </>
*/


/* Usando o 'Fragment' para incluir duas tags adjacentes, sem precisar envolvê-las em uma 'div'.
   O 'Fragment' não é renderizado. (Recomendado)

export default props =>
    <React.Fragment>
        <h2>Bom dia {props.nome}!</h2>
        <strong>Como você está?</strong>
    </React.Fragment>

*/

/* Usando um Array, porém nesse caso, é precisa definir um 'key' única para cada elemento, e assim não
   necessário usar uma 'div' (Porém para esse contexto, NÃO É RECOMENDADO)

export default props => [
        <h2 key="h2">Bom dia {props.nome}!</h2>,
        <strong key="strong">Como você está?</strong>
    ]

*/

/* Usando uma 'div' para envolver mais de um elementos adjacentes

export default props =>
    <div>
        <h2>Bom dia {props.nome}!</h2>
        <strong>Como você está?</strong>
    </div>

*/

