import React from 'react';
import './EmailForm.scss';

const EmailForm = (props) => {
    return (
        <div className='EmailForm'>
            <div className="EmailForm__cancel-btn">
                <button onClick={props.clicked} className='EmailForm__cancel-btn-x'>X</button>
            </div>
            <h2 className='EmailForm__contact-text'>Contact us for a Quote!</h2>
            <form className='EmailForm__quote' method='post' onSubmit={props.submit}>
                <div className="EmailForm__input-fields">
                    <input className='EmailForm__input-fields-input' type="text" placeholder='Name' name='name' required/>
                    <input className='EmailForm__input-fields-input' type="tel" pattern='[0-9]{10}' placeholder='Phone Number' name='phone number' required/>
                    <input className='EmailForm__input-fields-input' type="email" placeholder='Email' name='email' />
                </div>
                <div className="EmailForm__text-area">
                    <textarea className='EmailForm__text-area-text' name="message" cols="30" rows="10" placeholder='Message' required></textarea>
                </div>
                <div className="EmailForm__send-btn">
                    <button type='submit' onClick={props.sent} className='EmailForm__send-btn-success'>SEND</button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;