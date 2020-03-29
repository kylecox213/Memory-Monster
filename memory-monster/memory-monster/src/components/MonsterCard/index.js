import React from "./node_modules/react";
import "./style.css";

function MonsterCard(props) {
  const{ id, image } = props;

  return (
    <div className="card">
      <div className="img-container">
        <img className="img-thumbnail img-responsive" src={image} id={id} onClick={() => props.clickPicture(id)}/>
      </div>
    </div>
  );
}


export default MonsterCard;
