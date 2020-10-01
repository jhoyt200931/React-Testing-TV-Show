import React from 'react';

import { render } from '@testing-library/react';
import Episodes from './Episodes';

export const mockEpisodes = [{
        id: 1,
        season: 5,
        number: 5,
        name: 'Dummy Episode',
        summary: 'This is a dummy episode',
        runtime: '185 minutes'
    }]


test('Episodes render without an error', () => {
    render(<Episodes episodes={mockEpisodes}/>);
});