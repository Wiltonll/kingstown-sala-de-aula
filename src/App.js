import React, { useEffect } from "react";
import Form from './components/Form';
import M from 'materialize-css'

function App() {
  useEffect(() => {
    M.AutoInit()
  }, []) 
  return (
    <>
      <Form />
    </>
  );
}

export default App;
