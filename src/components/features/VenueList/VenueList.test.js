import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VenueList from './VenueList';

describe('<VenueList />', () => {
  test('it should mount', () => {
    render(<VenueList />);
    
    const venueList = screen.getByTestId('VenueList');

    expect(venueList).toBeInTheDocument();
  });
});