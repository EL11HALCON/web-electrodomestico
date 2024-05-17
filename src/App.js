import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About"
import NavBarComponent from "./Components/Nav";
import ClaimBook from "./pages/ClaimBook";

function App() {
  return (
    <div className=" form_container"> 
    <NavBarComponent></NavBarComponent>
      <BrowserRouter>      
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/ClaimBook' element={<ClaimBook/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
