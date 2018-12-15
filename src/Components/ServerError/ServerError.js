import React from 'react';

const ServerError = ({errMsg}) => {
  return (
    <div className="container col-3 my-3">
      <div className="alert-sm alert-danger rounded text-center" role="alert">{errMsg}</div>
    </div>
  )
}

export default ServerError;
