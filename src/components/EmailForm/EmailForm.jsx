import React from 'react';
import './EmailForm.css';

const EmailForm = (props) => {
    return (
        <div>
            <h2>Quote Request Form</h2>
            <form className='form-box' action="">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Phone Number' />
                <input type="email" name="email" id="email" placeholder='Email' />
                <input type="radio" name="Residential" id=""/>
                <input type="radio" name="Commercial" id=""/>
                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default EmailForm;