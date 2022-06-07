import { render, screen } from '@testing-library/react'
import React from 'react';
import { RecoilRoot } from 'recoil';
import Rodape from './Rodape'

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
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })

})