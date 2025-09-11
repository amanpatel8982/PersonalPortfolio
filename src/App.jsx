import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Certificate from './pages/Certificate';

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />

       </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
