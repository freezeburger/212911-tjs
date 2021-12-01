import React from 'react';
import PropTypes from 'prop-types';
import './VenueListItem.css';

const VenueListItem = props => {

  const { name, address, note, votes, deliveryTime, price, picture } = props.venue;

  return (
    <div className="VenueListItem" data-testid="VenueListItem">
      {/* img+div*2 */}
      <img src={ picture } alt="" />
      
      <div className="Middle">
          <h2>{name}  <em>{deliveryTime} hrs.</em></h2>
          <h3>{address}</h3>
          <br />
          <p>Price : {price}$</p>
      </div>

      <div className="Last">
        <strong>{note}</strong>
        <p>{votes} votes</p>
      </div>

    </div>
  )
}

VenueListItem.propTypes = {};
 
VenueListItem.defaultProps = {
  venue: {
    "name": "Default Restaurant",
    "address": "102 rue de la Paix",
    "note": 4.7,
    "votes": 32,
    "deliveryTime": 1,
    "price": 120,
    "picture": "http://unsplash.it/80"
  }
};

export default VenueListItem;
