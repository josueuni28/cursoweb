// Importante: Nõo é recomendado 'passar classes do Tailwind' dinamicamente (sempre usar classes inteiras),
//... porém quando o fizer ajustar o "tailwind.config.js" usando a propriedade "safelist: [ {pattern: /(bg|from|to)./} ]",
//... envolvendo tanto o 'safelist:' conto o 'content:' dentro do 'purge: {}' no "tailwind.config.js"
//... nesse caso, a compilaçao irá ficar maior e mais demorada.
interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    /*
     Forma correta de tratar a questao da classe de cor, sem precisar usar o "safelist" no "tailwind.config.js":
    */
    let cor: string
    if(props.cor == 'green'){ cor = 'from-green-400 to-green-700'
    }else if(props.cor == 'blue'){ cor = 'from-blue-400 to-blue-700'
    }else{ cor = 'from-gray-400 to-gray-700' }
    
    //const cor = props.cor ?? 'gray' // Forma nõo recomendada, porque o Tailwind nao entenderá no momento da complicação
    //... tendo que fazer a configuração do "safelist" no "tailwind.config.js"
    //... o código original no "className" do 'button' estava 'from-${cor}-400 to-${cor}-700' 
    return (
        <button className={`
            bg-gradient-to-r ${cor}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>{props.children}</button>
    )

}