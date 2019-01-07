import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Hello = ({ name }) => (
  <div>
    Hello
    {name}
    !
  </div>
);

Hello.defaultProps = {
  name: 'David',
};

Hello.propTypes = {
  name: PropTypes.string,
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  );
});
