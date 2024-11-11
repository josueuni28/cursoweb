import React from 'react'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Marcos', 18, '2'),
    new Cliente('Roberto', 62, '3'),
    new Cliente('Luana', 25, '4'),
    new Cliente('Marta', 57, '5'),
  ]

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-400
      text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}