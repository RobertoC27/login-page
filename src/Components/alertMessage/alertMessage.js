import React from 'react';

const alertMessage = ({errMsg, alertType, width}) => {
  return (
    <div className={width ? width : "container col-3 my-3"}>
      <div className={`alert-sm alert-${alertType} rounded text-center`} role="alert">{errMsg}</div>
    </div>
  )
}

export default alertMessage;
