import "./App.css"

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import NavAbout from "./components/navcontainer/NavAbout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesNavbar from "./components/navcontainer/ServicesNavbar";





const App = () => {
   
  return(
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<NavAbout/>}  />
        <Route path="/services" element={<ServicesNavbar/>}/>
      </Routes>
     </Router>
  )
}

export default App;