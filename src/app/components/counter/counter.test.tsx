import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Counter } from './Counter';
import { counterReducer } from '@/lib/features/counter/counterSlice'; 

const store = configureStore({
  reducer: { counter: counterReducer }, 
});

const renderWithStore = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

test('renders Counter component', () => {
  renderWithStore(<Counter />);

  // Check initial state
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('0');

  // Interact with the component
  fireEvent.click(screen.getByLabelText(/increment value/i));
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1');

  fireEvent.change(screen.getByLabelText(/set increment amount/i), { target: { value: '5' } });
  fireEvent.click(screen.getByText(/add amount/i));
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('6');

  fireEvent.click(screen.getByText(/add if odd/i));
  // Assuming initial count is even, the count should not change
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('6');
});
