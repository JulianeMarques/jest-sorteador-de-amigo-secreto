import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react';
import { RecoilRoot } from 'recoil';
import Rodape from './Rodape'
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes';

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('onde nao existem participantes suficientes', () => {
    test('se existe um botao na pagina', () => {
    render(
        <RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeInTheDocument()
    })

    test('a brincadeira nao pode ser iniciada', () => {
        beforeEach(() => {
            (useListaDeParticipantes as jest.Mock).mockReturnValue([])
        })
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })

})

describe('quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Jorel'])
    })
    test('a brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })
    test('a brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    })
})
