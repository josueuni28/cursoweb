import React from "react";

/* O função 'ChildrenWithProps' percorre os 'filhos' de um Componente e para cada filho faz uma
   'clonagem' atribuindo os parâmentros do 'pai' e depois 'recolocando' os parâmetros atribuídos
   ao 'filho' */

export function ChildrenWithProps(props) {
    return React.Children.map(props.children, child => {
        /* Essa função 'map' não é a função 'original' de um array, ela é uma função que está
           dentro de 'React.Children' e por tanto, nela, você precisa dizer que 'filhos' ela irá
           percorrer, nesse caso, o 'props.children' */ 
        return React.cloneElement(child, { ...props, ...child.props })
        /* Para cada Componente 'filho' encontrado, clona ele e passa os parêmetros que estão no pai, e
           o do próprio Componente. */
    })
}