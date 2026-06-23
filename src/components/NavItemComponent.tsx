import { NavLink, useMatch } from "react-router";

type NavItemProps = { to: string; icon: string; label: string; end?: boolean };

function NavItemComponent({ to, icon, label, end = false }: NavItemProps) {
  const match = useMatch({ path: to, end });
  return (
    <li
      className={match ? "active" : undefined}
      data-layout-structure="component"
    >
      <NavLink className="nav-link" to={to} end={end}>
        <span className="material-symbols-outlined">{icon}</span>
        <span className="link-label">{label}</span>
      </NavLink>
    </li>
  );
}

export default NavItemComponent;
