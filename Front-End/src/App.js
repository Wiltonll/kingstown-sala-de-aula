import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CriarTurma from './components/CriarTurma';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CriarTurma />} />
      </Routes>
    </Router>
  );
}

export default App;
