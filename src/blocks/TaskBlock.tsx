import database from "../storage/database";
import TaskComponent from "../components/TaskComponent";

function TaskBlock() {
  return (
    <div className="tasks" data-layout-structure="block">
      <h3 className="block-header task-title">
        <span className="material-symbols-outlined">checklist</span>
        Team Tasks
      </h3>
      {database.tasks.map((task) => (
        <TaskComponent key={task.id} task={task} theme="dark" />
      ))}
    </div>
  );
}

export default TaskBlock;
