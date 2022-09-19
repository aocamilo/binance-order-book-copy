import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders initial form correctly', () => {
  render(<App />);
  const formLabel = screen.getByText(/Input Symbol/i);
  const firstInput = screen.getByTestId('first-input');
  const secondInput = screen.getByTestId('second-input');
  const startButton = screen.getByTestId('start-button');

  expect(formLabel).toBeInTheDocument();
  expect(firstInput).toBeInTheDocument();
  expect(secondInput).toBeInTheDocument();
  expect(startButton).toBeInTheDocument();
});
