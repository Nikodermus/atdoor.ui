import React from 'react';

const GenericErrror = () => {
  const session_error = sessionStorage.getItem('error_msg');
  const message = session_error || "404 That doesn't exist";

  if (session_error) sessionStorage.removeItem('error_msg');

  return (
    <div>
      {message}
    </div>
  );
};

export default GenericErrror;
