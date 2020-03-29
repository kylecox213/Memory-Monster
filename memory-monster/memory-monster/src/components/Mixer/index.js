import React from "./node_modules/react";
import "./style.css";

const Mixer = props => <div className= {props.mixer===true ? "mixer" : "still"}>{props.monsters}</div>;

export default Mixer;