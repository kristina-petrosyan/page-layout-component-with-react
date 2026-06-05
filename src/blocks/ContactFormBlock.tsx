import FormGroupComponent from "../components/FormGroupComponent";

function ContactFormBlock() {
  return (
    <div
      className="contact-block"
      data-layout-structure="block"
      data-media="container"
    >
      <h3 className="block-header">
        <span className="material-symbols-outlined">send</span>
        Contact Us
      </h3>
      <form
        className="contact-form"
        data-layout-structure="component"
        noValidate
      >
        <div className="form-row">
          <FormGroupComponent />
          <FormGroupComponent />
        </div>
        <div className="form-row">
          <FormGroupComponent />
          <FormGroupComponent />
        </div>

        <button className="form-submit" type="submit">
          <span className="material-symbols-outlined">send</span>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactFormBlock;
