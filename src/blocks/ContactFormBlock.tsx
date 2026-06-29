import { useState } from "react";
import InputGroupComponent from "../components/InputGroupComponent";
import TextareaGroupComponent from "../components/TextareaGroupComponent";

function ContactFormBlock() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function saveToLocalStorage() {
    const contactData = {
      name,
      email,
      subject,
      message,
    };
    localStorage.setItem("contactFormData", JSON.stringify(contactData));
  }

  function clearForm() {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
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
          saveToLocalStorage();
          clearForm();
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
