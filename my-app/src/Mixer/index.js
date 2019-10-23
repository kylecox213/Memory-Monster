import React from "react";
import "./style.css";

const Mixer = props => <div className= {props.mixer===true ? "mixer" : "still"}>{props.friends}</div>;

export default Mixer;