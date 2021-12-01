import React from 'react';
import PropTypes from 'prop-types';
import './VenueList.css';

import VenueListItem from '../VenueListItem/VenueListItem';
import { useVenuesApi } from './use-venues-api.hook';


const  toItemList =  (item, num) => <VenueListItem venue={item} key={num}></VenueListItem>


const VenueList = ( { search = '' } ) => {

  const [venues] = useVenuesApi( 2000 );

  /* const byName =  item => {
    if( search == '' ) return true;
   return item.name.includes(search);
  } */

  const byName =  item =>  ( search == '' ) ? true : item.name.includes(search);
  
  return (
    <div className="VenueList" data-testid="VenueList">
      {
       venues.length 
       ?
       venues.filter( byName ).map( toItemList )
        :
        'Loading Data please wait...'
      }
    </div>
  );
}

VenueList.propTypes = {};

VenueList.defaultProps = {};

export default VenueList;
