import { useState } from "react";
import type { Task, TaskPriority, TaskStatus } from "../types/task.types";

interface TaskComponentProps {
  task: Task;
  theme?: "dark" | "light";
}

function getPriorityBadgeClass(priority: TaskPriority): string {
  if (priority === "urgent") return "badge--urgent";
  if (priority === "high") return "badge--high";
  if (priority === "medium") return "badge--medium";
  return "badge--low";
}

function getStatusBadgeClass(status: TaskStatus): string {
  if (status === "done") return "badge--done";
  if (status === "in_progress") return "badge--in-progress";
  return "badge--todo";
}

function getStatusLabel(status: TaskStatus): string {
  if (status === "done") return "done";
  if (status === "in_progress") return "in progress";
  return "todo";
}

function getProgressColor(status: TaskStatus): string {
  if (status === "done") return "var(--clr-success)";
  if (status === "in_progress") return "var(--clr-primary)";
  return "var(--clr-muted)";
}

function TaskComponent(props: TaskComponentProps) {
  const { task } = props;
  const {
    title,
    description,
    status: initialStatus,
    priority,
    dueDate,
    tags,
    completed: initialCompleted,
    progress: initialProgress,
  } = task;

  const [isCompleted, setIsCompleted] = useState(initialCompleted);

  const status: TaskStatus = isCompleted ? "done" : initialStatus;
  const progress = isCompleted ? 100 : initialProgress;

  const formattedDueDate = new Date(dueDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="task"
      data-layout-structure="component"
      data-completed={String(isCompleted)}
    >
      <div className="task-header">
        <button
          className="task-complete-btn"
          onClick={() => setIsCompleted((c) => !c)}
          aria-label={isCompleted ? "Mark incomplete" : "Mark complete"}
        >
          <span className="material-symbols-outlined">
            {isCompleted ? "check_circle" : "radio_button_unchecked"}
          </span>
        </button>
        <h4 className="task-title-text">{title}</h4>
        <span className={`badge ${getPriorityBadgeClass(priority)}`}>
          {priority}
        </span>
      </div>
      <p className="task-desc">{description}</p>
      <div className="task-footer">
        <div className="progress-wrap">
          <div className="progress-row">
            <span className={`badge ${getStatusBadgeClass(status)}`}>
              {getStatusLabel(status)}
            </span>
            <span className="progress-pct">{progress}%</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
                background: getProgressColor(status),
              }}
            ></div>
          </div>
        </div>
        <div className="task-meta">
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="due-date">Due {formattedDueDate}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskComponent;
