type ContactInfoProps = {
  icon: string;
  text: string;
  href?: string;
};

function ContactInfoComponent({ icon, text, href }: ContactInfoProps) {
  return (
    <li className="contact-item" data-layout-structure="component">
      <span className="material-symbols-outlined">{icon}</span>
      {href ? <a href={href}>{text}</a> : <span>{text}</span>}
    </li>
  );
}

export default ContactInfoComponent;
