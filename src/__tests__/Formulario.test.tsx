import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Formulario from '../componentes/Formulario';

test('when input is empty no new participants can be added', () => {
    render(<Formulario/>)
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
    render(<Formulario/>)
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