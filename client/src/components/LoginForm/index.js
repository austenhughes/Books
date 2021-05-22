import React from "react";

function LoginForm(props) {
  return (
    <form>
      <div className="loginForm">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="username"
          type="text"
          className="form-control"
          placeholder="username"
          id="username"
        />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="password"
          type="text"
          className="form-control"
          placeholder="password"
          id="password"
        />
      </div>
    </form>
  );
}

export default LoginForm;