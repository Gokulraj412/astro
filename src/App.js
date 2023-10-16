import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Home from './Pages/Home';
import Login from "./Pages/Login"



function App() {

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='#services' element={<Services />} />
            <Route path='#about' element={<About />} />
            <Route path='#contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}

      <Login />
    </div>
  );
}

export default App;
