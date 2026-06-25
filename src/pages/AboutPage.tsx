import { useState } from "react";
import database from "../storage/database";
import type { Event } from "../types/event.types";
import PostBlock from "../blocks/PostBlock";
import EventBlock from "../blocks/EventBlock";
import TaskBlock from "../blocks/TaskBlock";

function AboutPage() {
  const [events, setEvents] = useState<Event[]>(database.events);

  function handleDeleteEvent(id: number) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <div className="row" data-layout-structure="builder">
      <div className="col" data-layout-structure="builder" data-content="main">
        <main data-layout-structure="partial">
          <PostBlock />
        </main>
      </div>
      <div className="col" data-layout-structure="builder" data-content="aside">
        <aside data-layout-structure="partial">
          <EventBlock events={events} onDelete={handleDeleteEvent} />
          <TaskBlock />
        </aside>
      </div>
    </div>
  );
}

export default AboutPage;
