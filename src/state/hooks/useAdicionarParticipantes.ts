import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaParticipantesState } from "../atom"

// extrai a logica de adicionar o participante do estado e nao esta mais atrelado ao componente diretamente, basta importar e utilizar esse hook quem quiser adicionar 
export const useAdicionaParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState);
    const list = useRecoilValue(listaParticipantesState);
    const setErro = useSetRecoilState(erroState);

    return (nomeParticipante: string) => {
        if (list.includes(nomeParticipante)) {
            setErro('Nomes duplicados nao sao permitidos');
            return;
        }
        return setLista(listaAtual => [...listaAtual, nomeParticipante])
    }
};