import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="pix" element={<Portfolio />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Routes>
   

    
    
    </>



  );
}

export default App;
