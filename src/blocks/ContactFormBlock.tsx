import { useState } from "react";
import InputGroupComponent from "../components/InputGroupComponent";
import TextareaGroupComponent from "../components/TextareaGroupComponent";

const emptyForm = { name: "", email: "", subject: "", message: "" };

function ContactFormBlock() {
  const [contactFormObject, setContactFormObject] = useState(emptyForm);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setContactFormObject((current) => ({ ...current, [name]: value }));
  }

  function saveToLocalStorage() {
    localStorage.setItem("contactFormData", JSON.stringify(contactFormObject));
  }

  function clearForm() {
    setContactFormObject({ ...emptyForm });
  }

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
        onSubmit={(e) => {
          e.preventDefault();
          try {
            saveToLocalStorage();
            setSubmitError(null);
            clearForm();
          } catch {
            setSubmitError("Could not save your message. Please try again.");
          }
        }}
      >
        <div className="form-row">
          <InputGroupComponent
            label="Name"
            htmlFor="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            required
            minLength={2}
            value={contactFormObject.name}
            onChange={handleChange}
            requiredMessage="Name is required."
            invalidMessage="At least 2 characters required."
            successMessage="Looks good!"
          />
          <InputGroupComponent
            label="Email"
            htmlFor="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            value={contactFormObject.email}
            onChange={handleChange}
            requiredMessage="Email is required."
            invalidMessage="Enter a valid email address."
            successMessage="Valid email address."
          />
        </div>
        <InputGroupComponent
          label="Subject"
          htmlFor="contact-subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          required
          minLength={3}
          value={contactFormObject.subject}
          onChange={handleChange}
          requiredMessage="Subject is required."
          invalidMessage="At least 3 characters required."
          successMessage="Looks good!"
        />
        <TextareaGroupComponent
          label="Message"
          htmlFor="contact-message"
          name="message"
          placeholder="Your message…"
          rows={5}
          required
          minLength={10}
          value={contactFormObject.message}
          onChange={handleChange}
          requiredMessage="Message is required."
          invalidMessage="At least 10 characters required."
          successMessage="Great, thanks!"
        />
        {submitError && (
          <p className="form-message form-message--invalid">{submitError}</p>
        )}
        <button className="form-submit" type="submit">
          <span className="material-symbols-outlined">send</span>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactFormBlock;
