import React,{useContext} from 'react'
import './header.css';
import {Navbar,Nav}  from 'react-bootstrap';
import {Link} from "react-router-dom";
import UserContext from '../AppContext'; 

function Header() {
  const [value, setValue] = useContext(UserContext);
    return (
      <div className="navbarBg">
        <Navbar>
        <Nav as={Link} to="/"  style={{ "color": "white" ,"font-family":"open sans,sans-serif","font-size":"30px"}}>PrimeMovies</Nav>
             <Nav>
              <Nav.Link as={Link} to="/movie" style={{"font-family":"open sans,sans-serif", "color": "white","margin-left": "40px"}}>Movies</Nav.Link>
              <Nav.Link as={Link} to="/tv" style={{"font-family":"open sans,sans-serif", "color": "white" }}>TV</Nav.Link>
           </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" style={{ "color": "white","margin-left": "870px" }}>Login</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/subscribe" style={{"color": "white","background":"#1f80e0","font-family":"Roboto"}}>subscribe</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
};
    

export default Header;
