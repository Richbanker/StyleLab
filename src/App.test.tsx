import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the import form and disables import until credentials are entered', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'StyleLab' })).toBeInTheDocument();
  expect(screen.getByLabelText('Figma Access Token')).toBeInTheDocument();
  expect(screen.getByLabelText('Figma File Key')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Импортировать компоненты' })).toBeDisabled();
});
