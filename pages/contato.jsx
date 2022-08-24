import Formulario from "./components/formulario"

export default function contato(){
    
    const nome = "FIAP"

    return(
        <>
            <h1>Página Contato</h1>
            <h3>Elementos desnvolvidos no NextJS</h3>
            <h5>Usuário: {nome}</h5>
            
            <Formulario></Formulario>
        </>
    )
}