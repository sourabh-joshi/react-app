import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">{props.loadingText}</div>
    </div>
  );
};

Spinner.defaultProps = {
  loadingText: 'Loading...'
};

export default Spinner;
