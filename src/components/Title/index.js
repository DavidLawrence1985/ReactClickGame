import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="title">
      <img id="title-img" alt="nicktoons" src="https://png2.kisspng.com/sh/468241e5acbc7fa10d464d8f1ea7276a/L0KzQYm3V8A2N514i5H0aYP2gLBuTf5qa5xqhNHtZXBxPbBwgBsucqMyjNH4LX7sc7z7jB9ve151h958a3GwfrrqiCRwd594Rd54Z3AwRbO6hfQ2OWc3edM8M0exRIm9VMk6OWQ2TaU5OES3RISBUcc1P191htk=/kisspng-nickelodeon-nick-jr-too-nicktoons-polska-nicktoons-logo-5b3ed5162aa337.4864991315308444381747.png"/>
      <h1 id="main-title">Clicky Game{props.children}</h1>
      <p id="rules">Click an image you have not already clicked to score a point. If you have already clicked the image you lose!</p>
      <h3 id="score">Score: {props.count}</h3>
 
  </div>

  )
}

export default Title;
