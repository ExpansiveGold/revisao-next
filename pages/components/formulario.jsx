export default function Formulario(){

    return(
        <>
            <div className="container">
                <form action="">
                    <br />
                    <label htmlFor="text">Texto:</label><br />
                    <input type="text" name="nome" placeholder="nome do produto" className="form-control"/><br /><br />

                    <label htmlFor="date">Data:</label><br />
                    <input type="date" name="validade" className="form-control"/> <br /><br />

                    <label htmlFor="observacoes">Observações:</label><br />
                    <textarea name="observacoes" id="" cols="30" rows="10" placeholder="Observações" className="form-control"></textarea>

                    <input type="button" value="Gravar" className="btn btn-outline-info"/>
                </form>
            </div>
        </>
    )
}