import React from 'react';
import './SuccessCheck.css';

const SuccessCheck = (props) => {
    return(
    <div style={{
      opacity: props.showSuccess ? '1' : '0'
    }} >
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>
    </div>
    );
};

export default SuccessCheck;