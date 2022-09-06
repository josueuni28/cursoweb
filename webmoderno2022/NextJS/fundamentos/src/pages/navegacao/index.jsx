import Layout from '../../components/Layout'

export default function Navegacao() {
    return (
        <Layout titulo="Exemplo de Navegação já com o 'index.jsx'">
            <h1>Navegação #01</h1>
            <p>Nesse caso como essa pasta tem um 'index.jsx' não é necessário informar o arquivo 'index'.</p>
            <p>O Arquivo 'index.jsx' fica sendo a "Porta de entrada"</p>
        </Layout>
    )
}