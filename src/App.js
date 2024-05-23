import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import React, { useEffect } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Form from './components/Form';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/settings" exact element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
