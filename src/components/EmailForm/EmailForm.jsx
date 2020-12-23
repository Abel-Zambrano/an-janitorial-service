import React from 'react';
import './EmailForm.css';

const EmailForm = (props) => {
    return (
        <div className='emailForm-div'>
            <h2>Contact us for a Quote!</h2>
            <form className='quote-form' action="">
                <div className="input-fields">
                    <input className='input' type="text" placeholder='Name'/>
                    <input className='input' type="text" placeholder='Phone Number' />
                    <input className='input' type="email" name="email" id="email" placeholder='Email' />
                </div>
                <div className="textarea-field">
                    <textarea className='textarea' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
                <div className="btn-div">
                    <button className='danger'>CANCEL</button>
                    <button className='success'>SEND</button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;