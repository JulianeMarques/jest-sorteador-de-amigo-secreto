import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Formulario from '../componentes/Formulario';

test('when input is empty no new participants can be added', () => {
    render(
        <RecoilRoot>
            <Formulario/>
        </RecoilRoot>
        )
    // encontrar no DOM  o input - RTL
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    // encontrar o botao - RTL
    const btn = screen.getByRole('button');
    // garantir que o innput esteja no documento - JEST
    expect(input).toBeInTheDocument();
    // garantir que o btn esteja desabilitado - JEST
    expect(btn).toBeDisabled();
});

test('add a participant if there is a fulfilled name', () => {
    render(
        <RecoilRoot>
            <Formulario/>
        </RecoilRoot>
        )
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const btn = screen.getByRole('button');
    // inserir um valor no input (usuario digitando)
    fireEvent.change(input, {
        target: {
            value: 'Irmao do Jorel'
        }
    });
    // clicar no botao de submeter
    fireEvent.click(btn);
    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    // garantir que o input nao tenha um valor (string vazia)
    expect(input).toHaveValue("");
});

test('duplicated names can not be added to the list', () => {
    render(
        <RecoilRoot>
            <Formulario/>
        </RecoilRoot>
        )
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const btn = screen.getByRole('button');
    fireEvent.change(input, {
        target: {
            value: 'Irmao do Jorel'
        }
    });
    fireEvent.change(input, {
        target: {
            value: 'Irmao do Jorel'
        }
    });
    fireEvent.click(btn);

    const mensagemErro = screen.getByRole('alert');
    expect(mensagemErro.textContent).toBe('Nomes duplicados nao sao permitidos');
});