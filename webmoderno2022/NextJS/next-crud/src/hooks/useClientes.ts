import { useEffect, useState } from "react"
import ColecaoCliente from "../../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import clienteRepositorio from "../core/clienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){

    const repo: clienteRepositorio = new ColecaoCliente()

    const {clientesVisivel, exibirFormulario, exibirCliente} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos(){
        repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirCliente()
        })
    }

    function editarCliente (cliente: Cliente){
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente (cliente: Cliente){
        await repo.excluir(cliente)
        obterTodos()
    }
    
    function novoCliente (){
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente (cliente: Cliente){
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        editarCliente,
        excluirCliente,
        obterTodos,
        clientesVisivel,
        exibirCliente
    }

}