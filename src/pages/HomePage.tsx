import { useState } from "react";
import database from "../storage/database";
import type { Event } from "../types/event.types";
import SliderBlock from "../blocks/SliderBlock";
import StatsBlock from "../blocks/StatsBlock";
import PostBlock from "../blocks/PostBlock";
import QuestionBlock from "../blocks/QuestionsBlock";
import ContactFormBlock from "../blocks/ContactFormBlock";
import EventBlock from "../blocks/EventBlock";
import TaskBlock from "../blocks/TaskBlock";

function HomePage() {
  const [events, setEvents] = useState<Event[]>(database.events);

  function handleDeleteEvent(id: number) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <>
      <SliderBlock />
      <StatsBlock eventCount={events.length} />
      <div className="row" data-layout-structure="builder">
        <div
          className="col"
          data-layout-structure="builder"
          data-content="main"
        >
          <main data-layout-structure="partial">
            <PostBlock />
            <QuestionBlock />
            <ContactFormBlock />
          </main>
        </div>
        <div
          className="col"
          data-layout-structure="builder"
          data-content="aside"
        >
          <aside data-layout-structure="partial">
            <EventBlock events={events} onDelete={handleDeleteEvent} />
            <TaskBlock />
          </aside>
        </div>
      </div>
    </>
  );
}

export default HomePage;
