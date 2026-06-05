function EventComponent() {
  return (
    <div className="event" data-layout-structure="component">
      <div className="event-header">
        <h4 className="event-title-text">Late Night Pasta Workshop</h4>
        <span className="badge badge--upcoming">upcoming</span>
      </div>
      <p className="event-desc">
        A hands-on class where each guest rolls, cuts, and plates their own
        fresh tagliatelle.
      </p>
      <div className="event-location">📍 Cucina Lab, Bologna, Italy</div>
      <div className="event-footer">
        <span className="event-date">🗓 Jun 21, 2026</span>
        <div className="capacity-bar">
          <div className="capacity-track">
            <div
              className="capacity-fill"
              style={{ width: "88%", background: "var(--clr-warning)" }}
            ></div>
          </div>
          <span className="capacity-label">14 / 16</span>
        </div>
      </div>
      <div className="tags">
        <span className="tag">food</span>
        <span className="tag">workshop</span>
        <span className="tag">cooking</span>
      </div>
    </div>
  );
}

export default EventComponent;
