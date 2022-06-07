import { useSetRecoilState } from "recoil";
import { listaParticipantesState } from "../atom"

// extrai a logica de adicionar o participante do estado e nao esta mais atrelado ao componente diretamente, basta importar e utilizar esse hook quem quiser adicionar 
export const useAdicionaParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    return (nomeParticipante: string) => {
        return setLista(listaAtual => [...listaAtual, nomeParticipante])
    }
};