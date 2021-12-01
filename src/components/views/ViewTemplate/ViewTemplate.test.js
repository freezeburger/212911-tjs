import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewTemplate from './ViewTemplate';

describe('<ViewTemplate />', () => {
  test('it should mount', () => {
    render(<ViewTemplate />);
    
    const viewTemplate = screen.getByTestId('ViewTemplate');

    expect(viewTemplate).toBeInTheDocument();
  });
});