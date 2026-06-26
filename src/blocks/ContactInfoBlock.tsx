import ContactInfoComponent from "../components/ContactInfoComponent";

function ContactInfoBlock() {
  return (
    <div className="footer-contact" data-layout-structure="block">
      <h3 className="block-header contact-title">
        <span className="material-symbols-outlined">contact_mail</span>
        Contact Info
      </h3>
      <ul className="contact-list">
        <ContactInfoComponent
          icon="location_on"
          text="42 Component Lane, CSS City"
        />
        <ContactInfoComponent
          icon="mail"
          text="hello@layoutcomponents.dev"
          href="mailto:hello@layoutcomponents.dev"
        />
        <ContactInfoComponent
          icon="phone"
          text="+1 (555) 123-4567"
          href="tel:+15551234567"
        />
      </ul>
    </div>
  );
}

export default ContactInfoBlock;
