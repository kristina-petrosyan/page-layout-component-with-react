import type { Event, EventStatus } from "../types/event.types";

interface EventComponentProps {
  event: Event;
  theme?: "dark" | "light";
  onDelete?: (id: number) => void;
}

function getStatusBadgeClass(status: EventStatus): string {
  if (status === "upcoming") return "badge--upcoming";
  if (status === "sold_out") return "badge--sold-out";
  return "badge--completed";
}

function getStatusLabel(status: EventStatus): string {
  if (status === "sold_out") return "sold out";
  return status;
}

function getCapacityColor(fill: number): string {
  if (fill >= 0.9) return "var(--clr-danger)";
  if (fill >= 0.7) return "var(--clr-warning)";
  return "var(--clr-success)";
}

function EventComponent(props: EventComponentProps) {
  const { event, onDelete } = props;
  const {
    id,
    title,
    description,
    status,
    location,
    startDate,
    capacity,
    attendees,
    tags,
  } = event;

  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const capacityFill = capacity > 0 ? attendees / capacity : 0;
  const capacityPct = `${Math.round(capacityFill * 100)}%`;

  return (
    <div className="event" data-layout-structure="component">
      <div className="event-header">
        <h4 className="event-title-text">{title}</h4>
        <span className={`badge ${getStatusBadgeClass(status)}`}>
          {getStatusLabel(status)}
        </span>
        {onDelete && (
          <button
            className="event-delete-btn"
            onClick={() => onDelete(id)}
            aria-label={`Delete event: ${title}`}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        )}
      </div>
      <p className="event-desc">{description}</p>
      <div className="event-location">
        📍 {location.venue}, {location.city}, {location.country}
      </div>
      <div className="event-footer">
        <span className="event-date">🗓 {formattedStartDate}</span>
        <div className="capacity-bar">
          <div className="capacity-track">
            <div
              className="capacity-fill"
              style={{
                width: capacityPct,
                background: getCapacityColor(capacityFill),
              }}
            ></div>
          </div>
          <span className="capacity-label">
            {attendees} / {capacity}
          </span>
        </div>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default EventComponent;
