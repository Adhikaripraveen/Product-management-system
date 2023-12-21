import React, { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../Context";
import Profile from "../image/profile.png";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
const Nav = () => {
  const { form } = useContext(FormContext);
  const [show,setShow]=useState(false)
  const handleShow=()=>{
    setShow(true)
    console.log(show);
  }
  return (
    <>
    <span id="showicon"  >
   
      <div
        className="sidebar" style={{ width: "100%",background:"#F3EEEA",height:"100%"}}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Admin
          </p>
          <img
            src={Profile}
            alt="profile"
            style={{
              height: "30%",
              width: " 50%",
              borderRadius: "50%",
              margin: "auto",
              marginBottom: "1rem",
            }}
          />
          <p>{form.name}</p>
          <div style={{}}>
            <ul className="menu">
              <Link to="/Home" style={{textDecoration:"none"}}>
                
           <li className="menu_tabs"><HomeIcon style={{fontSize:"3rem"}}/>Home </li>
              </Link>
              <Link to="/AddProduct" style={{textDecoration:"none"}}>
             
                <li className="menu_tabs"><AddCardIcon style={{fontSize:"3rem"}}/>Add Products</li>
              </Link>
			  <Link to="/ListProduct"style={{textDecoration:"none"}}>
                <li className="menu_tabs">< InventoryIcon style={{fontSize:"3rem"}}/>Listing Product</li>
              </Link>
              
              <Link to="/Product-management-system"style={{textDecoration:"none"}}>
               
                <li className="menu_tabs"> <ExitToAppIcon style={{fontSize:"3rem"}}/>Logout</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </span>
   
   <div style={{position:"absolute"}}>
   <MenuIcon className="menuicon" style={{fontSize:"4rem",border:"2px solid black",zIndex:"9999"}} onClick={handleShow}/>
   </div>
      <div
        className="showbar" style={{ display:show?"block":"none",background:"#F3EEEA",position:show?"absolute":"relative",height:show?"100vh":""}}
      >
         <CloseIcon style={{    fontSize: "4rem",
    position: "absolute",
    right: "0"}} onClick={()=>setShow(false)}/>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Admin
          </p>
          <img
            src={Profile}
            alt="profile"
            style={{
              height: "30%",
              width: " 50%",
              borderRadius: "50%",
              margin: "auto",
              marginBottom: "1rem",
            }}
          />
          <p>{form.name}</p>
          <div style={{}}>
            <ul className="menu">
              <Link to="/Home" style={{textDecoration:"none"}}>
                
           <li className="menu_tabs"><HomeIcon style={{fontSize:"3rem"}}/>Home </li>
              </Link>
              <Link to="/AddProduct" style={{textDecoration:"none"}}>
             
                <li className="menu_tabs"><AddCardIcon style={{fontSize:"3rem"}}/>Add Products</li>
              </Link>
			  <Link to="/ListProduct"style={{textDecoration:"none"}}>
                <li className="menu_tabs">< InventoryIcon style={{fontSize:"3rem"}}/>Listing Product</li>
              </Link>
              
              <Link to="/Product-management-system"style={{textDecoration:"none"}}>
               
                <li className="menu_tabs"> <ExitToAppIcon style={{fontSize:"3rem"}}/>Logout</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      
      </>
  );
};

export default Nav;
