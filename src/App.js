import './App.css';
import { BrowserRouter as Router } from "react-router-dom";


import AcmInfo from './components/Dashboard/AcmInfo/AcmInfo';
import Contact from './components/Dashboard/Contact/Contact';
import Footer from './components/Dashboard/Footer/Footer';
import Navbar from './components/Dashboard/Navbar/Navbar';
import News from './components/Dashboard/NewsFlash/News';
import TitleAnimation from './components/Dashboard/TitleAnimation/TitleAnimation';
import FillerAnimation from './components/Dashboard/FillerAnimation/FillerAnimation';
// import Test from './components/Dashboard/Test/Test';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* <Test /> */}
      <Router>
      <Navbar />
      </Router>
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
