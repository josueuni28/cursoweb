import Cliente from "../core/Cliente"
import { IconeEdicao, IconeExclusao } from "./Icones"

interface TabelaPropos {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaPropos) {

    function renderizarCabecalho(){
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="p-4">Ações</th>
            </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td>
            <button className="h-6 w-6">{IconeEdicao}</button>
            <button className="vh-6 w-6">{IconeExclusao}</button>
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
                    {renderizarAcoes(cliente)}
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