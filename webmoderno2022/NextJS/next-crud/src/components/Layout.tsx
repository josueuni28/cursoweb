import Titulo from "./Titulo"

// Definindo Propriedades específicas para o Componente.
// O recurso "interface" é do próprio TypeScript
interface LayoutProps {
    titulo: string,
    children: any
}

export default function Layout(props: LayoutProps){

    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}