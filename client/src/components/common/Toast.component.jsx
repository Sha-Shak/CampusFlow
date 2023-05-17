import React from 'react';

function Toast({ msg, handleShow, bgColor }) {
  return (
    <div>
      <div className="toast toast-end">
        <div className="alert alert-info">
          <div>
            <span>New mail arrived.</span>
          </div>
        </div>
        <div className="alert alert-success">
          <div>
            <span>Message sent successfully.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
