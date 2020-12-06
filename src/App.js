import logo from './logo.svg';
import './App.css';

import AcmInfo from './components/AcmInfo/AcmInfo';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import News from './components/NewsFlash/News';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AcmInfo />
      <News />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
