import React from 'react'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Marcos', 18, '2'),
    new Cliente('Roberto', 62, '3'),
    new Cliente('Luana', 25, '4'),
    new Cliente('Marta', 57, '5'),
  ]

  function veClienteEditar (cliente: Cliente){
    console.log(cliente.nome)
  }

  function veClienteExcluir (cliente: Cliente){
    console.log(cliente.nome)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-400
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        <div className='flex justify-end'>
          <Botao cor='green' className='mb-4'>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} clienteEditar={veClienteEditar} clienteExcluir={veClienteExcluir}></Tabela>
      </Layout>
    </div>
  )
}