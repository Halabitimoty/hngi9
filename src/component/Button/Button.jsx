import React from "react";
import "../Button/Button.css";

function Button({ id, refs, name }) {
  return (
    <button id={id}>
      <a href={refs}>{name}</a>
    </button>
  );
}

export default Button;
