import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    editarCliente,
    excluirCliente,
    clientesVisivel,
    exibirCliente
  } = useClientes()

  // const clientes = [
  //   new Cliente('Ana', 34, '1'),
  //   new Cliente('Marcos', 18, '2'),
  //   new Cliente('Roberto', 62, '3'),
  //   new Cliente('Luana', 25, '4'),
  //   new Cliente('Marta', 57, '5'),
  // ]

  

  
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-400
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        { clientesVisivel ? (
            <>
            <div className='flex justify-end'>
              <Botao cor='green' className='mb-4' onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteEditar={editarCliente} clienteExcluir={excluirCliente}></Tabela>
            </>
          ) : (
            <Formulario
              cliente={cliente}
              clienteOnChange={salvarCliente}
              cancelado={exibirCliente}
            />
          )
        }
      </Layout>
    </div>
  )
}