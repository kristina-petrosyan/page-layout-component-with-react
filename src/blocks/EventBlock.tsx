import database from "../storage/database";
import EventComponent from "../components/EventComponent";

function EventBlock() {
  return (
    <div className="events" data-layout-structure="block">
      <h3 className="block-header event-title">
        <span className="material-symbols-outlined">event</span>
        Events
      </h3>
      {database.events.map((event) => (
        <EventComponent key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventBlock;
