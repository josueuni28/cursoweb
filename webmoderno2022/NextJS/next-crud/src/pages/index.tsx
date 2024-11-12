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

  function veClienteEditar (cliente: Cliente){
    console.log(cliente.nome)
  }

  function veClienteExcluir (cliente: Cliente){
    console.log(cliente.nome)
  }

  function salvarCliente (cliente: Cliente){
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'clientes' | 'form'>('clientes')

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
              <Botao cor='green' className='mb-4' onClick={() => setVisivel('form')}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteEditar={veClienteEditar} clienteExcluir={veClienteExcluir}></Tabela>
            </>
          ) : (
            <Formulario
              cliente={clientes[1]}
              clienteOnChange={salvarCliente}
              cancelado={() => setVisivel('clientes')}
            />
          )
        }
      </Layout>
    </div>
  )
}