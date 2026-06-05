import EventComponent from "../components/EventComponent";

function EventBlock() {
  return (
    <div className="events" data-layout-structure="block">
      <h3 className="block-header event-title">
        <span className="material-symbols-outlined">event</span>
        Events
      </h3>
      {/* Event Component Render Here*/}
      <EventComponent />
    </div>
  );
}

export default EventBlock;
