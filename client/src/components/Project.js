import React from "react";
// import "./components/Project.css";

function Project(props) {
  return (
    <div className="row pl-3 pb-3">
    <img src={props.imageSource} className="float-left" alt={props.altLabel} height="150" width="250"></img>
    <div className="col">
    <h5>{props.header}</h5>
    <p>{props.description}</p>
      <a href={props.deployedLink} target="_blank">Deployed Link</a> 
    <br></br>
      <a href={props.githubLink} target="_blank">Link to GitHub code</a>
    </div>
  </div> 
  )
}
  
export default Project;