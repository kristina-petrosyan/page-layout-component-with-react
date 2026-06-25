import type { Event } from "../types/event.types";
import EventComponent from "../components/EventComponent";

interface EventBlockProps {
  events: Event[];
  onDelete: (id: number) => void;
}

function EventBlock({ events, onDelete }: EventBlockProps) {
  return (
    <div className="events" data-layout-structure="block">
      <h3 className="block-header event-title">
        <span className="material-symbols-outlined">event</span>
        Events
      </h3>
      {events.map((event) => (
        <EventComponent key={event.id} event={event} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default EventBlock;
