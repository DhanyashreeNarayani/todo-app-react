import React from "react";

const Task = (props) => {
  return (
    <div className="task">
      <p
        style={{
          flex: 1,
          textDecoration: props.tick ? "line-through" : "none",
          opacity: props.tick ? 0.5 : 1,
        }}
      >
        {props.name}
      </p>

      <i
        className={`fas fa-check-circle ${
          props.tick ? "task-status-complete" : "task-status-pending"
        }`}
      ></i>
    </div>
  );
};

export default Task;
