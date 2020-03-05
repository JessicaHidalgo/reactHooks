import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalContextProvider } from "./Components/GlobalContextProvider";
import { LogIn } from "./Components/Login";
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText} from 'reactstrap';
import {NavigationBar} from "./Components/Navbar";
function App() {
  return (
   <> <div>
    
    
     <div style={{backgroundColor:'blue'}}>
      
    </div>
    
    </div>
    <GlobalContextProvider settings={{username:'jessica',password:'password'}}>
      <LogIn />
    </GlobalContextProvider> 
    
    </>  
   
  );
}

export default App;
