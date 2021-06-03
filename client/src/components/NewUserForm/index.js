import React from "react";


function NewUserForm(props) {
  return (
    <form>
      <div className="newUserForm">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="email"
          type="text"
          className="form-control"
          placeholder="email"
          id="email"
        />
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

export default NewUserForm;