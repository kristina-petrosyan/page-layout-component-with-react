function PageNavBlock() {
  return (
    <ul className="nav-list" data-layout-structure="block">
      <li className="active" data-layout-structure="component">
        <a className="nav-link" href="#">
          <span className="material-symbols-outlined">home</span>
          Home
        </a>
      </li>
      <li data-layout-structure="component">
        <a className="nav-link" href="#">
          <span className="material-symbols-outlined">info</span>
          <span className="link-label">About</span>
        </a>
      </li>
      <li data-layout-structure="component">
        <a className="nav-link" href="#">
          <span className="material-symbols-outlined">design_services</span>
          <span className="link-label">Services</span>
        </a>
      </li>
      <li data-layout-structure="component">
        <a className="nav-link" href="#">
          <span className="material-symbols-outlined">mail</span>
          <span className="link-label">Contact</span>
        </a>
      </li>
    </ul>
  );
}

export default PageNavBlock;
