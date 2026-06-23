import NavItemComponent from "../components/NavItemComponent";

function PageNavBlock() {
  return (
    <ul className="nav-list" data-layout-structure="block">
      <NavItemComponent to="/" icon="home" label="Home" end />
      <NavItemComponent to="/about" icon="info" label="About" />
      <NavItemComponent
        to="/services"
        icon="design_services"
        label="Services"
      />
      <NavItemComponent to="/contact" icon="mail" label="Contact" />

      <a href="/about" className="nav-link" data-layout-structure="component">
        <span className="material-symbols-outlined">info</span>
        <span className="link-label">About</span>
      </a>
    </ul>
  );
}

export default PageNavBlock;
