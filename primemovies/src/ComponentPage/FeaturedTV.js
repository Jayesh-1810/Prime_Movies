import React,{useEffect,useState} from 'react'
import './FeaturedTV.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FeaturedTV() {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8880/getFeaturedTvShows",
        { headers: { authorization: 'Basic ' + window.btoa("harshal:password") } }
    )
      .then(res => res.json())
        .then(response => setMovies(response.FeaturedTvShows));
    }, []);

    return (
      <div>
          <div className="FtvTitle">Featured Tv Shows</div>
          <div className="Ftv">
              {movies.map((tv) =>
                <img src={window.location.origin+tv.image_path}/>
              )}
          </div>
      </div>
    )
};
    

export default FeaturedTV;
