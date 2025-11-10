import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
// import TextForm from "./components/Textform.js";
// import Login from "./components/auth/login.js";
// import About from "./components/About.js";
import Textform from "./components/Textform.js";
 let title = "TextUtils";
 let home = "Home";
 let about = "About";
function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (  
    <> 
    <Navbar title={title} home={home} about={about} mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <Textform mode={mode}  />
    </div>
    </>
  );
}

export default App;


