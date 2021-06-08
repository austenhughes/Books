import React, { useState} from "react";
import { Button } from '@material-ui/core';

// needs working out 

function LoginForm(props) {

  const [user, setUser] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({...user, [name]: value})
    };

  function handleFormSubmitLogIn(event) {
      event.preventDefault();
      console.log(user)  
    };

  return (
    <form>
      <div className="loginForm">
        <input
          onChange={handleInputChange}
          value={props.value}
          name="username"
          type="text"
          className="form-control"
          placeholder="username"
          id="username"
        />
        <input
          onChange={handleInputChange}
          value={props.value}
          name="password"
          type="text"
          className="form-control"
          placeholder="password"
          id="password"
        />
      </div>

      <Button 
        onClick={handleFormSubmitLogIn} 
        className="btn btn-primary LogInBtn">
        Log in
      </Button>

    </form>
  );
}

export default LoginForm;