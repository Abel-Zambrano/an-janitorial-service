import React from 'react';
import './EmailForm.css';

const EmailForm = (props) => {
    return (
        <div className='emailForm-div'>
            <div className="cancel-btn">
                <button onClick={props.clicked} className='danger'>X</button>
            </div>
            <h2>Contact us for a Quote!</h2>
            <form className='quote-form' onSubmit={props.submit}>
                <div className="input-fields">
                    <input className='input' type="text" placeholder='Name' name='name' required/>
                    <input className='input' type="text" placeholder='Phone Number' name='phone number' required/>
                    <input className='input' type="email" placeholder='Email' name='email' />
                </div>
                <div className="textarea-field">
                    <textarea className='textarea' name="message" cols="30" rows="10" placeholder='Message' required></textarea>
                </div>
                <div className="btn-div">
                    <button type='submit' onClick={props.sent} className='success'>SEND</button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;