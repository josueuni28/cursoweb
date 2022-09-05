import css from "../styles/Estiloso.module.css"
// Você pode dar o nome que quiser para o estilo, nesse caso chamei de "css"

import Link from "next/link"

export default function Estiloso (){

    return (
        // Quando o estilo é Modularizado, você acessa o estilo referenciando uma classe ou id do estilo
        /* Como não é um estilo Global, você não pode colocar a classe diretamente na tag class (Só
            se fosse um estilo Global), nesse caso você acessa o estilo como uma propriedade em JS */
        <div className={css.teste} >
            <h1>Tabalhando com Estilosos Modularizados</h1>
            <p>Estilos modularizados são aplicados apenas no Componente. Diferente dos estilos "globais" que são aplicados em toda a sua aplicação.</p>
            <Link href="/">Voltar ao Index</Link>
        </div>
    )
}