import { useState } from "react";
import Cliente from "../core/Cliente";
import Entrada from "./Entrada";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteOnChange?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    // usando a condicional "?" no 'cliente' porque caso nao seja passado o 'cliente' significa que é um 'cliente novo'
    //... nesse caso, esse formlário será usado tanto para 'editar um cliente já cadastro' quanto para criar um 'novo'
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')

    return (
        <div className="bg-gray-200 p-4 rounded-md">
            { id ? (
                <Entrada somenteLeitura texto="Código" valor={id} />
             ) : false
            }
            <Entrada texto="Nome" valor={nome} onChange={setNome} />
            <Entrada texto="Idade" tipo="number" valor={idade} onChange={setIdade} />
            <div className="flex justify-end">
                <Botao cor='blue' onClick={() => props.clienteOnChange?.(new Cliente(nome, +idade, id))}>
                    { id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}