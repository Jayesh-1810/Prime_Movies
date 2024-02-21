import React from 'react'
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import LogIn from '../ComponentPage/LogIn';
import Home from '../ComponentPage/Home';
import subscribe from '../ComponentPage/subscribe';
import MovieTab from '../ComponentPage/MovieTab';
import DetailsTab from '../ComponentPage/DetailsTab';
import TvTab from '../ComponentPage/TvTab';

function Main() {  
    return (
      <div>
        <div>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/subscribe" component={subscribe} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/movie" component={MovieTab}/>
              <Route exact path="/tv" component={TvTab}/>
              <Route exact path="/DetailsTab/:id/:type" component={DetailsTab}/>
          </Switch>   
        </div>
      </div>
    );
};
    

export default Main;
