import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ greeting }) => (
  <React.Fragment>
    Greeting:
    {' '}
    {greeting}
  </React.Fragment>
);

HelloWorld.propTypes = {
  greeting: PropTypes.string.isRequired,
};
export default HelloWorld;
