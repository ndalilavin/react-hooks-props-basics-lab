import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {Links(props)}
    </div>
  );
}

function Links(props){
  return(
    <div>
      <h3>Links</h3>
      <a href={props.github}>{props.gitHub}</a>
      <a href={props.linkedin}>{props.linkedIn}</a>
    </div>
  )
}

function bio(props){
  if(props.bio){
    return <p>{props.bio}</p>
  } else {
    return null
  }
}
export default About;
