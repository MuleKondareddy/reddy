import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <nav>
           <NavLink to="/" activeClassName="active">
               About
             </NavLink>
            <NavLink to="/projects" activeClassName="active">
               Projects
            </NavLink>
         <NavLink to="/contact" activeClassName="active">
          Contact
         </NavLink>
     </nav>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





