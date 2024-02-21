import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TvTab.css';
import {useHistory } from "react-router-dom";
import DetailsTab from './DetailsTab';

function TvTab() {
  let history = useHistory();
  const [tv,setTv] = useState([]);  

  useEffect(() => {
    fetch("http://localhost:8880/retrieveAllTvShows",
        { headers: { authorization: 'Basic ' + window.btoa("harshal:password") } }
    )
      .then(res => res.json())
        .then(response => setTv(response.TvShows));
    }, []);

    function redirectDetails(id){
      history.push(`/DetailsTab/${id}/tvshowDetail`);
    }

    return (
      <div>
        <div style={{"text-align": "center" ,"font-size": "30px", "background":" #0f171e","color": "white"}}>Tv Shows</div>
        <div className="Tv">
            {tv.map((tv) =>
              <img onClick={() => redirectDetails(tv.id)} src={window.location.origin+tv.image_path}/>
            )}
        </div>
    </div>
    )
};
    

export default TvTab;
