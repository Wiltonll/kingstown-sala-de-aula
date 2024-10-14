import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioTurmas from './components/InicioTurmas';
import Form from './components/Form';

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
