import SliderBlock from "../blocks/SliderBlock";
import QuestionBlock from "../blocks/QuestionsBlock";
import AsidePartial from "../partials/AsidePartial";

function ServicesPage() {
  return (
    <div className="row" data-layout-structure="builder">
      <div className="col" data-layout-structure="builder" data-content="main">
        <main data-layout-structure="partial">
          <SliderBlock />
          <QuestionBlock />
        </main>
      </div>
      <div className="col" data-layout-structure="builder" data-content="aside">
        <AsidePartial />
      </div>
    </div>
  );
}

export default ServicesPage;
