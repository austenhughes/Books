import React from "react";

function NewJokeForm(props) {
  return (
    <form>
      <div className="newJokeForm">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="title"
          type="text"
          className="form-control"
          placeholder="Title"
          id="title"
        />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="part1"
          type="text"
          className="form-control"
          placeholder="Part 1"
          id="Part1"
        />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="part2"
          type="text"
          className="form-control"
          placeholder="Part 2"
          id="Part2"
        />
      </div>
    </form>
  );
}

export default NewJokeForm;