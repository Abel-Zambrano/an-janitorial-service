import React from 'react';
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return (
        <>
            <Backdrop show={props.show} clicked={props.clicked} />
            <div 
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}
                className='Modal' id={props.final}>
                {props.children}
            </div>
        </>
    );
};

export default Modal;