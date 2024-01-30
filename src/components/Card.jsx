import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.image} alt={props.alt} />
      </div>
      <div className="bottom">
        <p>Instagram👇🏻:</p>
        <p className="info">{props.instagram}</p>
      </div>
    </div>
  );
}

export default Card;
