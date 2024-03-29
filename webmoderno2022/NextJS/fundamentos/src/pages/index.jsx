import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Importando o metodo "Link" do Next para fazer a navegação, é mais rápido, apropriado para fazer aplicação SPA

import Navega from '../components/Navega'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Navega destino='/jsx' texto='[Exemplo] Sobre o JSX (Clique para navegar)' />

        <Navega destino="/estiloso" texto="[Exemplo] Estilos Modularizados" cor="coral" />

        <Navega destino="/usandocomponentes" texto="[Exemplo] Usando Componentes" cor="chartreuse" />
        
        {/* Nesse caso como a pasta já tem um arquivo "index.jsx", não precisa referenciar ele */}
        <Navega destino="/navegacao" texto="[Exemplo] Navegação #01" cor="#ffeb3b" />

        <Navega destino="/cliente/SP/234" texto="[Exemplo] Navegação #02" cor="#ffeb3b" />

        <Navega destino="/estado" texto="[Exemplo] Componente com Estado" cor="pink" />

        <Navega destino="/api/clientes" texto="[Exemplo] API #01" cor="#d351ef" />

        <Navega destino="/api/clientes/123" texto="[Exemplo] API #02 (Passando parâmetros)" cor="#d351ef" />

        <Navega destino="/integracao" texto="[Exemplo] Integração com a API" cor="#ff9800" />

        <Navega destino="/estatico" texto="[Exemplo] Conteúdo Estático" />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/josueuni28"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            Josué Leite de Souza
          </span>
        </a>
      </footer>
    </div>
  )
}
