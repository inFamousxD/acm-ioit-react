import './App.css';

import AcmInfo from './components/Dashboard/AcmInfo/AcmInfo';
import Contact from './components/Dashboard/Contact/Contact';
import Footer from './components/Dashboard/Footer/Footer';
import Navbar from './components/Dashboard/Navbar/Navbar';
import News from './components/Dashboard/NewsFlash/News';
import TitleAnimation from './components/Dashboard/TitleAnimation/TitleAnimation';
import FillerAnimation from './components/Dashboard/FillerAnimation/FillerAnimation';

function App() {
  return (
    <div>
      <Navbar />
      <TitleAnimation />
      <AcmInfo />
      <News />
      <FillerAnimation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
