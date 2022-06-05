import { render, screen } from '@testing-library/react';
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