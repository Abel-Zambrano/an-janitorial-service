import React from 'react';
import './SuccessCheck.scss';

const SuccessCheck = (props) => {
    return(
    <div className='SuccessCheck'>
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