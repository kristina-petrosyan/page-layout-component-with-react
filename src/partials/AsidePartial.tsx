import EventBlock from "../blocks/EventBlock";
import TaskBlock from "../blocks/TaskBlock";
function AsidePartial() {
  return (
    <aside data-layout-structure="partial">
      <EventBlock />
      <TaskBlock />
    </aside>
  );
}

export default AsidePartial;
