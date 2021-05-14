import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="ui error message">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
