export default function Titulo (props){

    return (
        // O "className" pode ser escrito com entre "{``}" para poder usar várias linhas ou da forma tradicional ""
        <div className={`
            flex flex-col justify-center
        `}>
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500" />
        </div>
    )
}