
const Formulario = () => {
    return (
        <form>
            <head>
            <link rel="stylesheet" href="Formulario.css"></link>
            </head>
            
            <input type="text"  placeholder="Insira os nomes dos participantes"/>
            <button disabled={true}>Adiconar</button>
        </form>
    )
};

export default Formulario;