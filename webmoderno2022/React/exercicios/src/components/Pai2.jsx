import React from "react"
import { ChildrenWithProps } from "../utils/whileElements"
// Importanndo a função 'ChildrenWithProps'

/* Outra forma de manipular Componentes 'filhos' */
export default props => {
    return <>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* Passando a função 'ChildrenWithProps' com as 'props' do Componente. */}
            { ChildrenWithProps(props) }
        </ul>
    </div>
    </>
}