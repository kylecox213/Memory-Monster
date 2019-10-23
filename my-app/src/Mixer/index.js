import React from "react";
import "./style.css";

const Mixer = props => <div className= {props.mixer===true ? "mixer" : "still"}>{props.monsters}</div>;

export default Mixer;