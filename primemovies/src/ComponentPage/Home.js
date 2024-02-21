import React,{useContext} from 'react'
import './Home.css';
import HeroSection from './HeroSection';
import FeaturedTV from './FeaturedTV';
import FeaturedMovie from './FeaturedMovie';

function Home() {
    return (
      <React.Fragment>
        <HeroSection/>
        <FeaturedTV/>
        <FeaturedMovie/>
      </React.Fragment>
    )
};
    

export default Home;
