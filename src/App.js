import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  let [mode, setMode] = useState('light');
  function toggleMode() {
    if(mode==='light') {
      document.body.style.backgroundColor ='#0a1128'
      setMode('dark');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
    <Navbar title="Textutils" home="Home" about="About" mode={mode} toggleMode={toggleMode}></Navbar>
    <div className="container">
      <TextForm heading="Enter the text" placeHolder="Enter your text here..."  mode={mode}></TextForm>
    </div>
    </>
  );
}

export default App;
