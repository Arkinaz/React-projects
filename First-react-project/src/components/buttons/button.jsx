import React from "react";
import "./button.scss";

const ButtonThing = (props) => {
  return (
    <button className={props.bgColor === "orange" ? "orange-btn" : ""}>
      {props.nameBtn}
    </button>
  );
};

export default ButtonThing;
