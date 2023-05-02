import { render, screen } from '@testing-library/react';
import Movies from '../components/Movies';

describe('Movies', () => {
  it('renders movie names', () => {
    const data = {
      docs: [
        {
          _id: '1',
          name: 'The Lord of the Rings',
          director: 'Peter Jackson',
          year: '2001',
        },
        {
          _id: '2',
          name: 'The Hobbit',
          director: 'Peter Jackson',
          year: '2012',
        },
      ],
    };

    render(<Movies data={data} />);
    const movieNames = screen.getAllByRole('heading', { level: 1 });
    expect(movieNames).toHaveLength(2);
    expect(movieNames[0]).toHaveTextContent('The Lord of the Rings');
    expect(movieNames[1]).toHaveTextContent('The Hobbit');
  });

  it('renders movie details', () => {
    const data = {
      docs: [
        {
          _id: '1',
          name: 'The Lord of the Rings',
          director: 'Peter Jackson',
          year: '2001',
        },
      ],
    };

    render(<Movies data={data} />);
    const movieDetails = screen.getAllByRole('listitem');
    expect(movieDetails).toHaveLength(2); // includes the h1 tag and one <p> tag
    expect(movieDetails[0]).toHaveTextContent('director: Peter Jackson');
    expect(movieDetails[1]).toHaveTextContent('year: 2001');
  });
});
