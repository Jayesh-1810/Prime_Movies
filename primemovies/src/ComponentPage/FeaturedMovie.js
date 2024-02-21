import React,{useEffect,useState} from 'react'
import './FeaturedMovie.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function FeaturedMovie() {
const [movies,setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8880/getFeaturedMovie",
        { headers: { authorization: 'Basic ' + window.btoa("harshal:password") } }
    )
      .then(res => res.json())
        .then(response => setMovies(response.FeaturedMovies ));
    }, []);

    return (
      <div >
          <div className="Fm" >Featured Movies</div>
          <div className="Fmv">
              {movies.map((props) =>
                <img src={window.location.origin+props.image_path} />
              )}
          </div>
      </div>
    )
};
    

export default FeaturedMovie;
