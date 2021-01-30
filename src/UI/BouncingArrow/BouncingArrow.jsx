import React from 'react';
import './BouncingArrow.scss';

function BouncingArrow(props) {
    return (
        <div className={`arrow bounce ${props.styleName}`}><i className="fa fa-angle-down fa-5x" aria-hidden="true"></i></div>
    );
};

export default BouncingArrow;