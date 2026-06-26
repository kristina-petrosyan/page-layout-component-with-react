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
          <FormGroupComponent
            label="Name"
            htmlFor="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            required
            minLength={2}
            requiredMessage="Name is required."
            invalidMessage="At least 2 characters required."
            successMessage="Looks good!"
          />
          <FormGroupComponent
            label="Email"
            htmlFor="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            requiredMessage="Email is required."
            invalidMessage="Enter a valid email address."
            successMessage="Valid email address."
          />
        </div>
        <FormGroupComponent
          label="Subject"
          htmlFor="contact-subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          required
          minLength={3}
          requiredMessage="Subject is required."
          invalidMessage="At least 3 characters required."
          successMessage="Looks good!"
        />
        <FormGroupComponent
          label="Message"
          htmlFor="contact-message"
          name="message"
          type="textarea"
          placeholder="Your message…"
          rows={5}
          required
          minLength={10}
          requiredMessage="Message is required."
          invalidMessage="At least 10 characters required."
          successMessage="Great, thanks!"
        />
        <button className="form-submit" type="submit">
          <span className="material-symbols-outlined">send</span>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactFormBlock;
