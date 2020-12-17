import React from 'react';
import './Modal.css';
import EmailForm from '../../components/EmailForm/EmailForm';

const Modal = (props) => {
    return (
        <div className='Modal'>
            <EmailForm />
            {props.children}
        </div>
    );
};

export default Modal;