import React from "react";
import "./inputBar.css";

const InputBar = () => {
  return (
    <form>
      <span className="Instruction">Add new Task: </span>
      <input className="text" type="text" name="New Task" />
      <input className="button" type="submit" />
    </form>
  );
};

export default InputBar;
