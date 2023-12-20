import React from "react";
import { useContext } from "react";
import { FormContext } from "../Context";
import Profile from "../image/profile.png";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Nav = () => {
  const { form } = useContext(FormContext);
  console.log(form.name);
  return (
    
      <div
        className="sidebar" style={{  width: "18%",background:"#F3EEEA"}}
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
              fontSize: "2rem",
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
                
           <li className="menu_tabs"><HomeIcon style={{}}/>Home </li>
              </Link>
              <Link to="/AddProduct" style={{textDecoration:"none"}}>
             
                <li className="menu_tabs"><AddCardIcon/>Add Products</li>
              </Link>
			  <Link to="/ListProduct"style={{textDecoration:"none"}}>
                <li className="menu_tabs">< InventoryIcon/>Listing Product</li>
              </Link>
              
              <Link to="/"style={{textDecoration:"none"}}>
               
                <li className="menu_tabs"> <ExitToAppIcon/>Logout</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      
  
  );
};

export default Nav;
