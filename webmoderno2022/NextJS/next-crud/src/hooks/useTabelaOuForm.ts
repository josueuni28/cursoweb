import { useState } from "react";

export default function useTabelaOuForm(){
    const [visivel, setVisivel] = useState<'clientes' | 'form'>('clientes')

    const exibirFormulario = () => setVisivel('form')
    const exibirCliente = () => setVisivel('clientes')

    return {
        formularioVisivel: visivel === 'form',
        clientesVisivel: visivel === 'clientes',
        exibirFormulario,
        exibirCliente
    }
}