import { useRef, useState } from "react";
import { useAdicionaParticipante } from "../state/hooks/useAdicionarParticipantes";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";

const Formulario = () => {
    
    const [nome, setNome] = useState('');
    // referencia para o input
    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionaParticipante();

    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionarNaLista(nome);
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
                {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
            </form>
        </div>
    )
};

export default Formulario;