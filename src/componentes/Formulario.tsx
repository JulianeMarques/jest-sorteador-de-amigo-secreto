import { useRef, useState } from "react";

const Formulario = () => {
    
    const [nome, setNome] = useState('');
    // referencia para o input
    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        setNome('')
        inputRef.current?.focus()
    }
    
    return (
        <div>
            <head>
            <link rel="stylesheet" href="Formulario.css"></link>
            </head>
            <form onSubmit={adicionarParticipante}>     
                <input 
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text"  
                    placeholder="Insira os nomes dos participantes"
                />
                <button disabled={!nome}>Adiconar</button>
            </form>
        </div>
    )
};

export default Formulario;