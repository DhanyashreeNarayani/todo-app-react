import React from "react";

const Task = (props) => {
  return (
    <div className="task">
      <p>{props.name}</p>
      <div
        className={`"completion-status ${
          props.tick === "true" ? "selected" : "unselected"
        }"`}
      ></div>
    </div>
  );
};

export default Task;
