import React from "react";
import "./style.css";

function Counter(props) {
    return <h3 className="Counter">{props.children}</h3>;
}

export default Counter;