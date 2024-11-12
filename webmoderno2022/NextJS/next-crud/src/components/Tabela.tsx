import Cliente from "../core/Cliente"
import { IconeEdicao, IconeExclusao } from "./Icones"

interface TabelaPropos {
    clientes: Cliente[]
    clienteEditar?: (cliente: Cliente) => void
    clienteExcluir?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaPropos) {

    const exibirAcoes = props.clienteExcluir || props.clienteEditar

    function renderizarCabecalho(){
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td className="flex justify-center">
                {props.clienteEditar ? (
                    <button onClick={() => props.clienteEditar?.(cliente)} className={`
                        h-11 w-11
                        flex justify-center items-center 
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>{IconeEdicao}</button>
                ) : false}
                {props.clienteExcluir ? (
                    <button onClick={() => props.clienteExcluir?.(cliente)} className={`
                        h-11 w-11
                        flex justify-center items-center 
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>{IconeExclusao}</button>
                ) : false}
            </td>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return (
                // Usando "key" por conta do "map" do React, que precisa de uma 'chave' única
                // No "className" foi usada uma lógica JS para 'zebrar as linhas' da tabela
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}