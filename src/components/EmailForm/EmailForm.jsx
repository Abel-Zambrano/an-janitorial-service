import React from 'react';
import './EmailForm.css';

const EmailForm = () => {
    return (
        <div>
            <h2>Quote Request Form</h2>
            <form className='form-box' action="">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Phone Number' />
                <input type="email" name="email" id="email" placeholder='Email' />
            </form>
        </div>
    );
};

export default EmailForm;