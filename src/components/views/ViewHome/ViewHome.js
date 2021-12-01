import React from 'react';
import PropTypes from 'prop-types';
import './ViewHome.css';

import ViewTemplate from '../ViewTemplate/ViewTemplate';
import { FeatureLogin } from '../../features';

const ViewHome = () => (
    <ViewTemplate title="Home">
      <FeatureLogin></FeatureLogin>
    </ViewTemplate>
);

ViewHome.propTypes = {};

ViewHome.defaultProps = {};

export default ViewHome;
