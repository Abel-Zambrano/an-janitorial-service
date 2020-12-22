import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return (
        <>
            <Backdrop show={props.show} clicked={props.clicked} />
            <div 
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                className='Modal'>
                {props.children}
            </div>
        </>
    );
};

export default Modal;