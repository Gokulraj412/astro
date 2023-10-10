import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='#services' element={<Services />} />
          <Route path='#about' element={<About />} />
          <Route path='#about' element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
