import React from 'react';
import './QuoteRequest.css';

const QuoteRequest = (props) => {
    return (
        <div className='QuoteDiv'>
            <button className='Quote' onClick={props.clicked}>
                <h2><i className="fas fa-concierge-bell"></i> Request a Quote</h2>
            </button>
        </div>
    );
};

export default QuoteRequest;