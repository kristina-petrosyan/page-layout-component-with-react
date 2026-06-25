import { useState } from "react";
import { useSearchParams } from "react-router";
import database from "../storage/database";
import type { Event } from "../types/event.types";
import PostBlock from "../blocks/PostBlock";
import EventBlock from "../blocks/EventBlock";
import TaskBlock from "../blocks/TaskBlock";

const ALL_TAGS = [...new Set(database.posts.flatMap((p) => p.tags))];

function PostsPage() {
  const [events, setEvents] = useState<Event[]>(database.events);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleDeleteEvent(id: number) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  const tag = searchParams.get("tag") ?? "";
  const sort = searchParams.get("sort") ?? "";

  const setParam = (key: string, value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set(key, value);
      else next.delete(key);
      return next;
    });
  };

  let filtered = database.posts.filter(
    (post) => !tag || post.tags.includes(tag),
  );

  if (sort === "views") {
    filtered = [...filtered].sort((a, b) => b.views - a.views);
  } else if (sort === "likes") {
    filtered = [...filtered].sort(
      (a, b) => b.reactions.likes - a.reactions.likes,
    );
  }

  return (
    <div className="row" data-layout-structure="builder">
      <div className="col" data-layout-structure="builder" data-content="main">
        <main data-layout-structure="partial">
          <div className="post-filters" data-layout-structure="block">
            <div className="filter-tags">
              <span className="filter-label">
                <span className="material-symbols-outlined">label</span>
                Tags
              </span>
              <button
                className={`filter-tag${!tag ? " active" : ""}`}
                onClick={() => setParam("tag", "")}
              >
                All
              </button>
              {ALL_TAGS.map((t) => (
                <button
                  key={t}
                  className={`filter-tag${tag === t ? " active" : ""}`}
                  onClick={() => setParam("tag", t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <select
              className="filter-sort"
              value={sort}
              onChange={(e) => setParam("sort", e.target.value)}
            >
              <option value="">Default</option>
              <option value="views">Most Viewed</option>
              <option value="likes">Most Liked</option>
            </select>
          </div>
          <PostBlock posts={filtered} />
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

export default PostsPage;
