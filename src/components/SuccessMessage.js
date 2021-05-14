import React from 'react';

const SuccessMessage = ({ message }) => {
  return (
    <div className="ui success message">
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessage;
