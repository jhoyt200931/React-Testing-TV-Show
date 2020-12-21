import React from 'react';

import { render } from '@testing-library/react';
import Episodes from './Episodes';

export const mockEpisodes = [{
        id: 1,
        season: 5,
        number: 5,
        name: 'Dummy Episode',
        summary: 'This is a dummy episode',
        runtime: '185 minutes',
        image: {
           medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
           original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        }
    }]


test('Episodes render without an error', () => {
    render(<Episodes episodes={mockEpisodes}/>);
});