import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import AddProduct from "./Components/AddProduct";
import Barcode from "./Components/Barcode";
import ListProduct from "./Components/ListProduct";
function App() {

  return (
    <>
     
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/AddProduct" element={<AddProduct/>}/>
          <Route path="/Barcode" element={<Barcode/>}/>
          <Route path="/ListProduct" element={<ListProduct/>}/>
        </Routes>
      
     
    </>
  );
}

export default App;
