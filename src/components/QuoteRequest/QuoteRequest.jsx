import React from 'react';
import './QuoteRequest.scss';

const QuoteRequest = (props) => {
    return (
        <div className='QuoteRequest'>
            <button className='QuoteRequest__button' onClick={props.clicked}>
                <p className='QuoteRequest__button-text'><i className="fas fa-concierge-bell"></i> Request a Quote</p>
            </button>
        </div>
    );
};

export default QuoteRequest;