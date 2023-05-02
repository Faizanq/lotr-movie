import { render, fireEvent } from '@testing-library/react';
import Options from '../components/Options';

describe('Options', () => {
  it('renders all questions', () => {
    const { getByText } = render(<Options selection={null} setSelection={() => {}} />);
    expect(getByText('character')).toBeInTheDocument();
    expect(getByText('movie')).toBeInTheDocument();
    expect(getByText('book')).toBeInTheDocument();
    expect(getByText('quote')).toBeInTheDocument();
  });

  it('renders selected question with selected style', () => {
    const { getByText } = render(<Options selection='movie' setSelection={() => {}} />);
    expect(getByText('movie')).toHaveClass('selectedButton');
  });

  it('renders non-selected question with non-selected style', () => {
    const { getByText } = render(<Options selection='character' setSelection={() => {}} />);
    expect(getByText('movie')).toHaveClass('nonSelectedButton');
  });

  it('calls setSelection with correct question on button click', () => {
    const setSelectionMock = jest.fn();
    const { getByText } = render(<Options selection={null} setSelection={setSelectionMock} />);
    fireEvent.click(getByText('book'));
    expect(setSelectionMock).toHaveBeenCalledWith('book');
  });
});
