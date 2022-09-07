import Layout from '../components/Layout'

export function getStaticProps(){
    // Essa função criará uma página "estática"
    // Essa função também pode ser "async" para você pode fazer uma requisição por exemplo.

    /* Você pode definir um tempo para a página ser atualizada novamente retornando além
       do "props", também o "revalidate" com o tempo em segundos, ex: revalidate: 180, nesse caso
       a página será atualizada (com as novas informações, se tiver) a casa 3 minutos.
       
       Ou ainda fazer essa validação por "demanda", veja em:
       https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation */
    return {
        props: {
            numero: Math.random()
        }
    }
}

/*
export function getServerSideProps(){
    // Com a função "getServerSideProps" ao contrário da "getStaticProps", o conteúdo será sempre
    // gerado no servidor e depois enviado como resposta para o 'cliente', nesse caso sempre será um
    // número randomico diferente.
}
*/

// Nesse caso você recebe os atributos gerados, e pode pegar com o "props"
export default function Estatico(props) {

    return (
        <Layout titulo="Gerando conteúdo Estático">
            <div>{props.numero}</div>
            <p><em>Esse exemplo o número randomico é gerado uma única vez; Esse exemplo só vai funcinar se você montar a "build" com o comando: <code>npm next <strong>build</strong></code> e acessar essa página. </em></p>
        </Layout>
    )
}