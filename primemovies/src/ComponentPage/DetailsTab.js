import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetailsTab.css';

function DetailsTab(props) {
  const [Details,setDetails] = useState({});   
  useEffect(() => {
    fetch("http://localhost:5000/"+props.match.params.type+"/"+props.match.params.id)
        .then(res => res.json())
        .then(response => setDetails(response));
    }, []);

    return (
      <div>
        <div className="DetailsTab">
          <img src={window.location.origin+Details.image} />
          <div className='Detailsdesc'>
              <p>{Details.description}</p>
          </div>
        </div>
    </div>
    )
};
    
export default DetailsTab;
