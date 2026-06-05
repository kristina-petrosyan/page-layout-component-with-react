import QuestionComponent from "../components/QuestionComponent";

function QuestionBlock() {
  return (
    <div className="questions" data-layout-structure="block">
      <h3 className="block-header">
        <span className="material-symbols-outlined">help</span>
        Questions
      </h3>
      {/* Render Quesion Component Here */}
      <div className="questions-wrapper">
        <QuestionComponent />
        <QuestionComponent />
      </div>
    </div>
  );
}

export default QuestionBlock;
