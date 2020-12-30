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


function App() {
  const [ quote, setQuote ] = useState(false);
  
  const quoteHandler = (e) => {
    e.preventDefault();
    setQuote(!quote);
  }  

  console.log(quote);
  

  return (
    <div className="App">
      <Logo />
      <Header />
      <Center />
      <Modal show={quote} clicked={quoteHandler}>
        <EmailForm clicked={quoteHandler} />
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
