import React from "react";
import Filho from "./Filho";

export default props => {
    return <>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="João" sobrenome={props.sobrenome} />
            {/* Passando o sobrenome do 'Pai' para o 'Filho' */}
            <Filho {...props} />
            {/* Passando todos os parâmetros do Pai para o Filho */}
            <Filho {...props} nome="Carla" />
            {/* Passando todos os parâmetros, porém depois definindo um novo 'nome' para o Filho  */}
        </ul>
    </div>
    </>
}