import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioTurmas from './components/InicioTurmas/InicioTurmas.js'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioTurmas />} />
      </Routes>
    </Router>
  );
}

export default App;
