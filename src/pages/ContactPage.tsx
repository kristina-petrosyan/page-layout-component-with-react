import ContactFormBlock from "../blocks/ContactFormBlock";
import ContactInfoBlock from "../blocks/ContactInfoBlock";

function ContactPage() {
  return (
    <div className="row" data-layout-structure="builder">
      <div
        className="col"
        data-layout-structure="builder"
        data-content="main"
      >
        <main data-layout-structure="partial">
          <ContactFormBlock />
        </main>
      </div>
      <div
        className="col"
        data-layout-structure="builder"
        data-content="aside"
      >
        <aside data-layout-structure="partial">
          <ContactInfoBlock />
        </aside>
      </div>
    </div>
  );
}

export default ContactPage;
