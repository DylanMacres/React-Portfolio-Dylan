import {BrowserRouter, Routes, Route} from "react-router-dom"

import Projects from "./components/projects";
import Resume from "./components/resume";
import Home from "./components/home";
import './App.css';




function App() {
  return (
    <BrowserRouter>
        <div>
          <Routes>
         
            <Route path="/" element={<Resume/>}></Route>
            <Route path="/resume" element={<Home/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;