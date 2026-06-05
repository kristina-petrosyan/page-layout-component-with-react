import ContactInfoComponent from "../components/ContactInfoComponent";

function ContactInfoBlock() {
  return (
    <div className="footer-contact" data-layout-structure="block">
      <h3 className="block-header contact-title">
        <span className="material-symbols-outlined">contact_mail</span>
        Contact Info
      </h3>
      <ul className="contact-list">
        <ContactInfoComponent />
        <ContactInfoComponent />
        <ContactInfoComponent />
      </ul>
    </div>
  );
}

export default ContactInfoBlock;
