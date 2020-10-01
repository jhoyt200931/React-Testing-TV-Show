import React from 'react';

import { render, wait, fireEvent, screen } from '@testing-library/react';
import { fetchShow as mockFetchShow} from './api/fetchShow'; 
import { mockEpisodes } from './components/Episodes.test';
import App from './App';
import Episodes from './components/Episodes';

jest.mock("./api/fetchShow.js");

const mockShow= {
    data: {
        image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
           original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        },
        _embedded: {
            episodes: [{
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
        }]},
        summary: "A test show"
    }
};

// test('App renders', () => {
//     render(<App />);
// });

test("App fetches and renders data", async () => {
    mockFetchShow.mockResolvedValueOnce( mockShow );
    const { getByText, getByTestId } = render(<App />);

    await wait(() => {
        getByText(/Select a season/i); 
    });
    const dropdown = getByText(/Select a season/i);
    fireEvent.mouseDown(dropdown);
    const season = getByText(/Season 5/i);
    fireEvent.click(season);
    render(<Episodes episodes={mockEpisodes}/>);
    const episodes = getByTestId(/episodes/i);

    expect(episodes).toBeInTheDocument();
});