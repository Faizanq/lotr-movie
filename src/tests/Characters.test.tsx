import { render, screen } from '@testing-library/react';
import Characters from '../components/Characters';

test('renders character names', () => {
  const data = {
    docs: [
      {_id: '1', name: 'Luke Skywalker', species: 'Human', gender: 'Male', homeworld: 'Tatooine'},
      {_id: '2', name: 'Leia Organa', species: 'Human', gender: 'Female', homeworld: 'Alderaan'}
    ],
    total: 2
  };
  render(<Characters data={data} />);
  const characterNames = screen.getAllByText(/^[A-Za-z\s]+$/);
  expect(characterNames).toHaveLength(2);
});
