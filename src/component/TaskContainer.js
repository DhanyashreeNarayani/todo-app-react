import React from "react";
import "../styles/TaskContainer.scss";
import Task from "./Task";

const TaskContainer = (props) => {
  return (
    <div className="taskContainer">
      <Task name="Create New project" tick={false} />
      <Task name="Working Call" tick={true} />
      <Task name="Meet with doctor" tick={false} />
    </div>
  );
};

export default TaskContainer;
