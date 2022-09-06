import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'
// Para conseguir pegar os valores dinâmicos no nome da pasta e arquivo é preciso usar o "useRouter"

export default function Navegacao() {
    const router = useRouter()
    return (
        <Layout titulo="Exemplo de Navegação Dinâmica">
            <h1>Navegação #02</h1>
            {/* Exibindo os valores da URL */}
            <div>Código: <b>{router.query.codigo}</b></div>
            <div>Filial: <b>{router.query.filial}</b></div>
            <p>Você pode mudar a Filial e Código, diretamente pela URL</p>
        </Layout>
    )
}