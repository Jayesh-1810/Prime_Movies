import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieTab.css';
import {useHistory } from "react-router-dom";

function MovieTab() {
  let history = useHistory();
  const [movies,setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8880/retrieveAllMovies",
    { headers: { authorization: 'Basic ' + window.btoa("harshal:password") } }
)
  .then(res => res.json())
    .then(response => setMovies(response.Movies));
}, []);


function redirectDetails(id){
  history.push(`/DetailsTab/${id}/movieDetail`);
}

    return (
      <div >
        <div style={{"text-align": "center" ,"font-size": "30px", "background":" #0f171e","color": "white"}}>Movies</div>
        <div className="Movie">
            {movies.map((props) =>
              <img onClick={() => redirectDetails(props.id)} src={window.location.origin+props.image_path} />
            )}
        </div>
    </div>
    )
};
    

export default MovieTab;
