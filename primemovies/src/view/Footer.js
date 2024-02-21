import React from 'react'
import {Navbar,Nav}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
      <div style={{"background": "black"}}>
                       <div> <Navbar>
                              <Navbar.Brand href="#home" style={{ "color": "white" ,"font-family":"open sans,sans-serif","font-size":"30px"}}>PrimeMovies</Navbar.Brand>
                       </Navbar>
                       </div>
            <div style={{"background": "0f171e","display": "flex","flex-direction":"row"}}>
                  
                  <div>
                        <div style={{"display": "flex","flex-direction":"row"}}>
                              <Link to='/'>About PrimeMovies</Link>
                              <Link style={{"margin-left": "15px"}}>Terms Of Use</Link>
                              <Link style={{"margin-left": "15px"}}>Privacy Policy</Link>
                              <Link style={{"margin-left": "15px"}}>FAQ</Link>
                              <Link style={{"margin-left": "15px"}}>Feedback</Link>
                        </div>
                        <div style={{ "color": "white"}}>
                             <p>Please read these terms and conditions of use carefully before accessing,
                               using or obtaining any materials, information, products or services.</p> 
                        </div>
                  </div>
                  <div style={{"display": "flex","flex-direction":"column","margin-left": "150px"}}>
                        <div style={{ "color": "white"}}>
                              <label>connect with us</label>
                        </div>
                        <div style={{"font-size": "30px","display": "flex","flex-direction":"row"}}>
                              <Link ><FaInstagram style={{"background":"linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"}}/></Link>
                              <Link ><FaFacebookF color="#29487d"/></Link>
                              <Link ><AiFillYoutube color="red"/></Link>
                              <Link ><AiFillLinkedin color="#0a66c2"/></Link>
                        </div>
                  </div>
            </div>
      </div>
    )
};
    

export default Footer;
