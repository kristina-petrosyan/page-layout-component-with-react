import NavPartial from "../partials/NavPartial";
import AsidePartial from "../partials/AsidePartial";
import FooterPartial from "../partials/FooterPartial";

import HeaderBlock from "../blocks/HeaderBlock";
import SliderBlock from "../blocks/SliderBlock";
import PostBlock from "../blocks/PostBlock";
import QuestionBlock from "../blocks/QuestionsBlock";

import ContactFormBlock from "../blocks/ContactFormBlock";

function HomePage() {
  return (
    <section className="wrapper" data-layout-structure="page">
      <div className="container" data-layout-structure="builder">
        <HeaderBlock />
        <NavPartial />
        <SliderBlock />

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
            <AsidePartial />
          </div>
        </div>

        {/* Footer */}

        <FooterPartial />
      </div>
    </section>
  );
}

export default HomePage;
