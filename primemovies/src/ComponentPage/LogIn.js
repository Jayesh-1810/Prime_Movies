import React,{useContext} from 'react'
import {Container}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LogIn.css'
import { useHistory } from 'react-router-dom';
function LogIn() {
    let history = useHistory();
    function successLogin(response){
        history.push("/");
    }
    function failedLogin(response){
        console.log(""+response);
    }
    function submitSignIn(event) {
        debugger;
      let email =  event.currentTarget.form.elements['email'].value;
      let password =  event.currentTarget.form.elements['password'].value;
      fetch("http://localhost:8880/signIn",
      {
        method: 'POST',
        headers: { authorization: 'Basic ' + window.btoa("harshal:password")  },
        body: {data:JSON.stringify({
            "username": email,
            "password": password
        })}
      }
      )
      .then(res => res)
        .then(response => successLogin(response))
        .catch(response =>failedLogin(response));
      }
    return (
        <Container>
            
            <form className="fdclass">
                <h3 style={{"color":"white"}}>Log In</h3>

                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" style={{"color":"white"}}>Remember me</label>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={(e) => {submitSignIn(e)}}>Submit</button>
                <p className="forgot-password text-right" style={{"color":"white"}}>
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        
        </Container>
    )
};
    

export default LogIn;
