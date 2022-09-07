import Layout from '../components/Layout'
import { useState } from 'react'
// Importando o 'useState' para conseguir modificar um estado do Componente

export default function Estado() {
    const [numero, setNumero] = useState(0)

    /* O 'useState' retorna um array de 2 posição, o index 0 é o estado, e o index 1 é uma função que
    altera o estado, porque no React é totalmente desencorajado a mudar um estado diretamente, por isso
    usa-se uma função */

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar Número</button>
        </Layout>
    )
}