import Cabecalho from "../components/Cabecalho"
import Link from "next/link"

export default function Exemplo (){

    return (
        <>
            <Cabecalho titulo="Olá Mundo" />
            <Cabecalho titulo="Novo Título" />

            <b><Link href="/">(Voltar ao Index)</Link></b>
        </>
    )
}