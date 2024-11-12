
interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    onChange?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){

    return (
        <div className="flex flex-col mb-4">
            <label className="mb-4">
            {props.texto}
            </label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2 focus:border-blue-500
                    ${props.somenteLeitura ? 'text-gray-400' : 'focus:bg-white'}
                `}
                onChange={e => props.onChange?.(e.target.value)} />
        </div>
    )
}