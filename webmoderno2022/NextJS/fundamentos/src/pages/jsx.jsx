import Link from "next/link"
import Layout from "../components/Layout"
// Usar o metodo Link é mais apropriado para fazer SPA (É mai rápido) e não usa a API History do Navegador

/* Exemplo para mostrar a Integração do Javascript com o JSX */

export default function JSX(){
    const a = 3
    const b = 4

    const elementoH1 = <h1>Olá Mundo</h1>

    function subtitulo() {
        return <p>Bem vindo(a) ao JSX!</p>
    }

    return (
        <Layout titulo="Integrando JSX Com JavaScript">
            <div>
                {elementoH1}
                {subtitulo()}
                <ul>
                    <li>Integrando</li>
                    <li>JSX</li>
                    <li>Com Javascript</li>
                    {a * b}
                </ul>
                <Link href="/">(Voltar ao Index)</Link>
            </div>
        </Layout>
    )
}