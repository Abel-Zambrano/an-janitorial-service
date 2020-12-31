import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Center from './components/Center/Center';
import JanitorialServices from './components/JanitorialServices/JanitorialServices';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo/Logo';
import QuoteRequest from './components/QuoteRequest/QuoteRequest';
import Modal from './UI/Modal/Modal';
import EmailForm from './components/EmailForm/EmailForm';
import emailjs from 'emailjs-com';


function App() {
  const [ quote, setQuote ] = useState(false);
  
  const quoteHandler = (e) => {
    e.preventDefault();
    setQuote(!quote);
  }  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e4gpc6a', 'template_r4vi4eo', e.target, 'user_9RDGxD4kcKMCjuQ9bdwrE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }  

  return (
    <div className="App">
      <Logo />
      <Header />
      <Center />
      <Modal show={quote} clicked={quoteHandler}>
        <EmailForm clicked={quoteHandler} submit={sendEmail} />
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
}

export default App;
