import './App.css';

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resources from './components/Resources';

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";


export default function App() {
  return (
    <div className="App">

      <header>
        
              <Router>
                <Navigation />
          
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/resources' element={<Resources />} />

                  <Route path='/contact' element={<Contact />} />
                </Routes>
            <Footer />
            </Router>
    </header>
    </div>
  );
}

