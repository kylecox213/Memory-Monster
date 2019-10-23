import React from "react";
import "./style.css";

function FriendCard(props) {
  const{ id, image } = props;

  return (
    <div className="card">
      <div className="img-container">
        <img className="img-thumbnail img-responsive" src={image} id={id} onClick={() => props.clickPicture(id)}/>
      </div>
    </div>
  );
}


export default FriendCard;
