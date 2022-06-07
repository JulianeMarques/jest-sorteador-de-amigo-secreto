import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';

describe('Uma lista vazia de participantes', () => {
    render(
    <RecoilRoot>
        <ListaParticipantes />
    </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0)
});