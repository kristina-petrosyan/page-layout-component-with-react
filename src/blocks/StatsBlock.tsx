import database from "../storage/database";

interface StatsBlockProps {
  eventCount: number;
}

function StatsBlock({ eventCount }: StatsBlockProps) {
  const stats = [
    { icon: "article", label: "Posts", count: database.posts.length, color: "accent" },
    { icon: "checklist", label: "Tasks", count: database.tasks.length, color: "warning" },
    { icon: "event", label: "Events", count: eventCount, color: "info" },
  ];

  return (
    <div className="stats-block" data-layout-structure="block">
      {stats.map(({ icon, label, count, color }) => (
        <div
          key={label}
          className={`stat-card stat-card--${color}`}
          data-layout-structure="component"
        >
          <span className="material-symbols-outlined stat-icon">{icon}</span>
          <span className="stat-count">{count}</span>
          <span className="stat-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsBlock;
