import './App.scss';
import React, { useState } from 'react';
import Center from './components/Center/Center';
import Footer from './components/Footer/Footer';
import QuoteRequest from './components/QuoteRequest/QuoteRequest';
import Modal from './UI/Modal/Modal';
import EmailForm from './components/EmailForm/EmailForm';
import emailjs from 'emailjs-com';
import SuccessCheck from './UI/SuccessCheck/SuccessCheck';
import ServiceContainer from './components/ServiceContainer/ServiceContainer';
import ContactCard from './components/ContactCard/ContactCard';


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
      <Center />
      <ServiceContainer />
      <Modal show={quote} clicked={quoteHandler} final={final}>
        { formShow ? <EmailForm show={quote} clicked={quoteHandler} submit={sendEmail} /> : <SuccessCheck />}
      </Modal>
      <QuoteRequest clicked={quoteHandler} />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default App;     