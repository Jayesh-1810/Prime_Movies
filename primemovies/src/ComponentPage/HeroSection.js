import React,{useContext} from 'react'
import './Home.css';
import Avengers from '../Image/Hero section slide show/Avengers.jpg';
import Batman from '../Image/Hero section slide show/Batman.jpg';
import CaptainAmerica from '../Image/Hero section slide show/Captian America.jpg';
import Hulk from '../Image/Hero section slide show/Hulk.jpg';
import Loki from '../Image/Hero section slide show/Loki.jpg';
import Spiderman from '../Image/Hero section slide show/Spiderman.jpg';
import { Image } from 'react-bootstrap';
import {Carousel}  from 'react-bootstrap';


function HeroSection() {
    return (
      <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Avengers}/>
            <Carousel.Caption>
                  <h3>English | Hindi | Telugu </h3>
                  <p>Watch Now</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Batman} />
            <Carousel.Caption>
                  <h3>Action | Adventure</h3>
                  <p>After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CaptainAmerica}/>
            <Carousel.Caption>
                  <p>Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization. </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Hulk}/>
            <Carousel.Caption>
                  <h3>Action | SciFI </h3>
                  <p>Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.</p>
                  <p>Watch Now</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Loki}/>
            <Carousel.Caption>
                  <h3>Action | Adventure | Fantasy</h3>
                  <p>The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Spiderman}/>
            <Carousel.Caption>
            <h3>Action | Adventure | Fantasy</h3>
                  <p>After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.</p>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    )
};
    

export default HeroSection;
