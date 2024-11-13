import React, { useState } from 'react'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Marcos', 18, '2'),
    new Cliente('Roberto', 62, '3'),
    new Cliente('Luana', 25, '4'),
    new Cliente('Marta', 57, '5'),
  ]

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'clientes' | 'form'>('clientes')

  function veClienteEditar (cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function veClienteExcluir (cliente: Cliente){
    console.log(cliente.nome)
  }
  
  function novoCliente (){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente (cliente: Cliente){
    console.log(cliente)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-400
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        { visivel === 'clientes' ? (
            <>
            <div className='flex justify-end'>
              <Botao cor='green' className='mb-4' onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteEditar={veClienteEditar} clienteExcluir={veClienteExcluir}></Tabela>
            </>
          ) : (
            <Formulario
              cliente={cliente}
              clienteOnChange={salvarCliente}
              cancelado={() => setVisivel('clientes')}
            />
          )
        }
      </Layout>
    </div>
  )
}