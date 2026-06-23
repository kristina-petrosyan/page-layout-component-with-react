import PostBlock from "../blocks/PostBlock";
import AsidePartial from "../partials/AsidePartial";

function AboutPage() {
  return (
    <div className="row" data-layout-structure="builder">
      <div className="col" data-layout-structure="builder" data-content="main">
        <main data-layout-structure="partial">
          <PostBlock />
        </main>
      </div>
      <div className="col" data-layout-structure="builder" data-content="aside">
        <AsidePartial />
      </div>
    </div>
  );
}

export default AboutPage;
