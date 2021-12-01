import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewDetail from './ViewDetail';

describe('<ViewDetail />', () => {
  test('it should mount', () => {
    render(<ViewDetail />);
    
    const viewDetail = screen.getByTestId('ViewDetail');

    expect(viewDetail).toBeInTheDocument();
  });
});