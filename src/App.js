import './App.scss';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Center from './components/Center/Center';
import JanitorialServices from './components/JanitorialServices/JanitorialServices';
import Footer from './components/Footer/Footer';
import QuoteRequest from './components/QuoteRequest/QuoteRequest';
import Modal from './UI/Modal/Modal';
import EmailForm from './components/EmailForm/EmailForm';
import emailjs from 'emailjs-com';
import SuccessCheck from './UI/SuccessCheck/SuccessCheck';


function App() {
  const [ quote, setQuote ] = useState(false);
  const [ formShow, setFormShow ] = useState(true);
  const [ final, setFinal ] = useState('');
  
  const quoteHandler = (e) => {
    e.preventDefault();
    setQuote(!quote);
    setFormShow(true)
    setFinal('');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_e4gpc6a', 'template_r4vi4eo', e.target, 'user_9RDGxD4kcKMCjuQ9bdwrE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setFormShow(false)
      setQuote(!quote);
      setFinal('final')
  }
  
  return (
    <div className="App">
      <Header />
      <Center />
      <Modal show={quote} clicked={quoteHandler} final={final}>
        { formShow ? <EmailForm show={quote} clicked={quoteHandler} submit={sendEmail} /> : <SuccessCheck />}
      </Modal>
      <QuoteRequest clicked={quoteHandler} />
      <div className='our-services'>
          <h2>Our Services</h2>
      </div>
      <div className='service-container'>
        <JanitorialServices />
      </div>
      <Footer />
    </div>
  );
};

export default App;     