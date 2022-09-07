import Layout from "../components/Layout"
import { useState } from 'react'

export default function Estiloso (){

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})
    // Criando os estados

    // Criando a função assímcrona que obtém os dados da API
    async function obterCliente(){
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
    }

    return (
        <Layout titulo="Integração com a API">
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
                {/* 'Setando' o novo código do cliente no evento de modificação do input e passando
                     o código no valor do input */}

                <button onClick={obterCliente}>Obter Cliente</button>
                {/* Chamando a função 'obterCliente' no evento de click do botão */}
            </div>
            <ul>
                {/* Exibindo os dados obtidos */}
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}