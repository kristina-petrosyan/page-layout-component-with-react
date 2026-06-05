function QuestionComponent() {
  return (
    <div className="question" data-layout-structure="component">
      <details>
        <summary>
          What is the difference between a <code>page</code> and a{" "}
          <code>builder</code>?
        </summary>
        <p className="answer">
          The <code>page</code> is the outermost full-viewport wrapper — it
          fills the screen and sets the background canvas. The{" "}
          <code>builder</code> (the <code>container</code> div) lives inside it
          and constrains content to a readable max-width, centred with{" "}
          <code>margin-inline: auto</code>. Think of <code>page</code> as the
          wall and <code>builder</code> as the framed picture hanging on it.
        </p>
      </details>
    </div>
  );
}

export default QuestionComponent;
