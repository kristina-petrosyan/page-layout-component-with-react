import { useState } from "react";
import database from "../storage/database";
import type { Event } from "../types/event.types";
import EventBlock from "../blocks/EventBlock";
import TaskBlock from "../blocks/TaskBlock";

function AsidePartial() {
  const [events, setEvents] = useState<Event[]>(database.events);

  function handleDeleteEvent(id: number) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <aside data-layout-structure="partial">
      <EventBlock events={events} onDelete={handleDeleteEvent} />
      <TaskBlock />
    </aside>
  );
}

export default AsidePartial;
