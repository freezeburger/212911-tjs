import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VenueListItem from './VenueListItem';

describe('<VenueListItem />', () => {
  test('it should mount', () => {
    render(<VenueListItem />);
    
    const venueListItem = screen.getByTestId('VenueListItem');

    expect(venueListItem).toBeInTheDocument();
  });
});