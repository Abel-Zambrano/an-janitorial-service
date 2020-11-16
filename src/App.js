import './App.css';
import Header from './components/Header/Header';
import Center from './components/Center/Center';
import JanitorialServices from './components/JanitorialServices/JanitorialServices';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Center />
      <div className='service-container'>
        <JanitorialServices />
      </div>
      <Footer />
    </div>
  );
}

export default App;
