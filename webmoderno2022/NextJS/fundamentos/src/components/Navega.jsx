import Link from 'next/link'
import styles from '../styles/Navega.module.css'

export default function Layout(props) {
    return (
        <Link href={props.destino}>
            {/* Exemplo aplicando estilo diretamente no elemento, dinamicamene */}
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ?? '#94caed'
            }}>
                {props.texto}
            </div>
        </Link>
    )
}
