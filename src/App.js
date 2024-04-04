import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';


// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";





function App() {
  const [mode,setMode] = useState("light")
  const [text,setText] = useState("Enable Dark Mode")
  const [alert,setAlert] = useState(null)
  const [color,setColor] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const changeColor=()=>{
    setColor(document.getElementById("exampleColorInput").value);
    document.body.style.backgroundColor = color;

  }

  const toggleMode = ()=>{
    if(mode === "light" && text === "Enable Dark Mode"){
      setMode("dark");
      setText("Disable Dark Mode");
      document.body.style.backgroundColor = "#545F66"
      document.body.style.color = "#fff";
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode("light");
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212529";
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUTL" mode={mode} toggleMode={toggleMode} btnText={text} changeColor={changeColor} color={color}/>
    <Alert alert={alert} />
    <div className="container my-5">
    {/* <Routes>
          <Route exact path="/about" element={<About/>} > */}
          {/* </Route> */}
          {/* <Route exact path="/" element={} > */}
          {/* </Route> */}
        {/* </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" />
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;