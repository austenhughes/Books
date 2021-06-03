// // import React from "react";
// import React, { useState } from "react";
// import { Button } from '@material-ui/core';

// import API from "../../utils/API";

// function SaveNewJokeBtn(props) {

//   const [formObject ] = useState({})

//   function handleFormSubmitNewJoke(event) {
//     event.preventDefault();
//     console.log("Hi from over here")
//     if (formObject.joketype) {
//       API.saveJokes({
//         userID: "1",
//         postID: 1,
//         joketype: formObject.joketype,
//         partOne: formObject.partOne,
//         partTwo: formObject.partTwo
//       })
//         // .then(res => loadJokes())
//         .catch(err => console.log(err));
//     }
//   };

//   return (
//     <Button 
//         onClick={handleFormSubmitNewJoke} 
//         className="btn btn-primary SaveNewJokeBtn">
//         SAVE
//     </Button>
//     );
// }

// export default SaveNewJokeBtn;