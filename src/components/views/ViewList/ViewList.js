import React from 'react';
import PropTypes from 'prop-types';
import './ViewList.css';
import ViewTemplate from '../ViewTemplate/ViewTemplate'
import { VenueList } from '../../features';


const ViewList = () => (
  <ViewTemplate title="List">
    <VenueList></VenueList>
  </ViewTemplate>
);

ViewList.propTypes = {};

ViewList.defaultProps = {};

export default ViewList;
