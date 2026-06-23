import SliderBlock from "../blocks/SliderBlock";
import PostBlock from "../blocks/PostBlock";
import QuestionBlock from "../blocks/QuestionsBlock";
import ContactFormBlock from "../blocks/ContactFormBlock";
import AsidePartial from "../partials/AsidePartial";

function HomePage() {
  return (
    <>
      <SliderBlock />
      <div className="row" data-layout-structure="builder">
        <div className="col" data-layout-structure="builder" data-content="main">
          <main data-layout-structure="partial">
            <PostBlock />
            <QuestionBlock />
            <ContactFormBlock />
          </main>
        </div>
        <div className="col" data-layout-structure="builder" data-content="aside">
          <AsidePartial />
        </div>
      </div>
    </>
  );
}

export default HomePage;
