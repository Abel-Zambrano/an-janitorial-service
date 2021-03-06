import React from 'react';
import './Backdrop.scss';

const Backdrop = (props) => {
    return (
       props.show ? <div onClick={props.clicked} className='Backdrop'></div> : null
    );
};

export default Backdrop;