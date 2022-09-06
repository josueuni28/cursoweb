import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? "Sem Título"}</h1>
                <Link href='/'>Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {/* Você acessa o conteudo que foi inserido dentro de um Componente com a
                    propriedade ".children" */}
                {props.children}
            </div>
        </div>
    )
}
