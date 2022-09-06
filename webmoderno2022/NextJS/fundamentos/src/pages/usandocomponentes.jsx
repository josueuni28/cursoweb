import Cabecalho from "../components/Cabecalho"
import Link from "next/link"
import Layout from "../components/Layout"

export default function Exemplo (){

    return (
        <Layout titulo="Usando Componente">
            <Cabecalho titulo="Olá Mundo" />
            <Cabecalho titulo="Novo Título" />

            <b><Link href="/">(Voltar ao Index)</Link></b>
        </Layout>
    )
}